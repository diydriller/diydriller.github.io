<template>
  <div class="index_container" ref="containerElement" :class="{'drop_down': dropDownButtonClicked}">
  </div>
</template>

<script>
import {computed, defineComponent, onMounted, onUpdated, ref, useStore} from '@nuxtjs/composition-api';
import renderFunction from '~/hooks/three.js';

// Todo : typescript 변환작업 해야함

export default defineComponent({
  setup(){
    const store=useStore();
    let containerElement=ref(null);

    const dropDownButtonClicked = ref(computed(()=>store.getters["button/dropDownButtonState"]));


    onUpdated(()=>{
      document.querySelector(".index_container").innerHTML='';
      if(dropDownButtonClicked.value){
        renderFunction(containerElement.value.clientWidth,screen.height);
        return;
      }
      renderFunction(containerElement.value.clientWidth,screen.height);
    })

    onMounted(()=>{

      renderFunction(containerElement.value.clientWidth,screen.height);
    });



    return {containerElement,dropDownButtonClicked}



  }
})
</script>
