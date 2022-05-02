<template>
  <div class="index_container" ref="containerElement" :class="{'drop_down': dropDownButtonClicked}">
  </div>
</template>

<script>
import {computed, defineComponent, onBeforeUnmount, onMounted, onUpdated, ref, useStore} from '@nuxtjs/composition-api';
import renderFunction from '~/hooks/three.js';

// Todo : typescript 변환작업 해야함

export default defineComponent({
  setup(){
    const store=useStore();
    let containerElement=ref(null);

    const dropDownButtonClicked = ref(computed(()=>store.getters["button/dropDownButtonState"]));

    const handleResize=()=>{
      document.querySelector(".index_container").innerHTML='';
      renderFunction(containerElement.value.clientWidth,screen.height);
    }

    onUpdated(handleResize);

    onMounted(()=>{
      window.addEventListener('resize', handleResize);
      renderFunction(containerElement.value.clientWidth,screen.height);
    });

    onBeforeUnmount(()=>{
      console.log('unmount');
      window.removeEventListener('resize', handleResize);
    })



    return {containerElement,dropDownButtonClicked}



  }
})
</script>
