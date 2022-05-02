import {
  AdditiveBlending, BackSide, BufferGeometry, Float32BufferAttribute, Group,
  Mesh,
  PerspectiveCamera, Points, PointsMaterial, Raycaster,
  Scene,
  ShaderMaterial,
  SphereGeometry,
  TextureLoader,
  WebGLRenderer
} from "three";
import vertexShader from "~/assets/shader/vertex.glsl";
import fragmentShader from "~/assets/shader/fragment.glsl";
import atmosphereVertexShader from "~/assets/shader/atmosphereVertex.glsl";
import atmosphereFragmentShader from "~/assets/shader/atmosphereFragment.glsl";
import gsap from "gsap";

export default (width,height)=>{


  const world = {
    size:{
      width: width,
      height: height
    }
  }

  const scene=new Scene();
  const renderer=new WebGLRenderer();
  const raycaster=new Raycaster();

  renderer.setSize(world.size.width,world.size.height);
  const camera=new PerspectiveCamera(75,world.size.width/world.size.height,0.1,1000);


  document.querySelector(".index_container").appendChild(renderer.domElement);
  camera.position.set(0,0,50);


  const sphere=new Mesh(
    new SphereGeometry(5,50,50),
    new ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms:{
        globeTexture:{
          value: new TextureLoader().load('/earth.jpg')
        }
      }
    })
  )


  const atmosphere=new Mesh(
    new SphereGeometry(5,50,50),
    new ShaderMaterial({
      vertexShader:atmosphereVertexShader,
      fragmentShader:atmosphereFragmentShader,
      blending: AdditiveBlending,
      side: BackSide
    })
  )
  atmosphere.scale.set(1.1,1.1,1.1);
  scene.add(atmosphere);

  const group= new Group();
  group.add(sphere);
  scene.add(group);

  const startVertices=[];
  for(let i=0;i<10000;i++){
    const x=(Math.random()-0.5)*2000;
    const y=(Math.random()-0.5)*2000;
    const z=-Math.random()*4000;
    startVertices.push(x,y,z);
  }
  const starGeometry=new BufferGeometry();
  starGeometry.setAttribute(
    'position',
    new Float32BufferAttribute(
      startVertices,3
    )
  )

  const sprite = new TextureLoader().load( '/disc.png' );
  const startMaterial=new PointsMaterial( { size: 3, sizeAttenuation: true, map: sprite, alphaTest: 0.5, transparent: true })
  const stars=new Points(
    starGeometry,startMaterial
  )
  scene.add(stars);

  camera.position.z=15;

  const mouse={
    x:undefined,
    y:undefined
  };


  function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene,camera);
    raycaster.setFromCamera(mouse,camera);
    const intersects=raycaster.intersectObject(sphere);
    sphere.rotation.y+=0.001;
    if(intersects.length>0){
      gsap.to(group.rotation,{
        x: -mouse.y,
        y:mouse.x,
        duration: 2
      })
    }
  }


  addEventListener('mousemove',()=>{
    mouse.x=2*(event.clientX/innerWidth)-1;
    mouse.y=-2*(event.clientY/innerHeight)+1;
  })


  animate();


}
