// document.querySelector("body").addEventListener("click", function (e) {
//   let effect = document.createElement("effect");
//   document.querySelector("body").appendChild(effect);
//   effect.style.left = e.pageX + "px";
//   effect.style.top = e.pageY + "px";
//   let maxElems = 16;
//   for (let i = 0; i < maxElems; i++) {
//     let span = document.createElement("span");
//     let newSpan = effect.appendChild(span);
//     let deg = i * (360 / maxElems) + Math.floor(Math.random() * 15);
//     let height = 20 + Math.floor(Math.random()*30);
//     let width = 4 + Math.floor(Math.random()*10);
//     newSpan.style.height = height + "px";
//     newSpan.style.width = width + "px";
//     newSpan.style.transform = "rotate(" + deg + "deg)";
//   }
//
//   window.requestAnimationFrame(
//     function () {
//       Array.from(effect.querySelectorAll("span")).forEach((el) => {
//         let movedY = -50 - Math.floor(Math.random()*100) ;
//         el.style.transform += "scaleY(0.5) translateY(" + movedY + "px)";
//         el.style.opacity = "0";
//       });
//       window.setTimeout(function(){
//         document.body.removeChild(effect);
//       }, 400)
//     }
//
//   );
// });

