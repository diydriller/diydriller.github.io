<template>
  <div class="index_container" ref="containerElement" :class="{'drop_down': dropDownButtonClicked}">
  </div>
</template>

<script>
import {computed, defineComponent, onMounted, onUpdated, ref, useStore} from '@nuxtjs/composition-api';
import renderFunction from '~/hooks/three.js';

export default defineComponent({
  setup(){
    const store=useStore();
    let containerElement=ref(null);

    const dropDownButtonClicked = ref(computed(()=>store.getters["button/dropDownButtonState"]));

    const size={
      before: {
        width: undefined,
        height: undefined
      },
      after:{
        width: undefined,
        height: undefined
      }
    }

    onUpdated(()=>{
      document.querySelector(".index_container").innerHTML='';
      if(dropDownButtonClicked.value){
        renderFunction(size.after.width,size.after.height);
        return;
      }
      renderFunction(size.before.width, size.before.height);
    })

    onMounted(()=>{
      size.before.width=screen.width-66;
      size.before.height=screen.height;
      size.after.width=screen.width+116;
      size.after.height=screen.height;

      renderFunction(size.before.width,size.before.height);

    });



    return {containerElement,dropDownButtonClicked}



  }
})
</script>
