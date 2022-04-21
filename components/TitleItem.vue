<template>
  <div class="logo_detail">
    <i class='bx bxl-blogger'></i>
    <span class="logo_name" :class="{'drop_down':dropDownButtonClicked}">개발 블로그</span>
  </div>
</template>

<script lang="ts">
import {defineComponent, computed, useStore, ref} from '@nuxtjs/composition-api';
import {ButtonStoreType} from "@/store/button";

export default defineComponent({
  setup(){
    const store=useStore<ButtonStoreType>();

    const dropDownButtonClicked = ref(computed(()=>store.getters["button/dropDownButtonState"]));

    return {dropDownButtonClicked}
  }
})
</script>


<style lang="scss" scoped>

.logo_detail{
  display: flex;
  height: 60px;
  width: 100%;
  align-items: center;

  i{
    color: #fff;
    font-size: 30px;
    text-align: center;
    height: 50px;
    min-width: 78px;
    line-height: 50px;
  }

  .logo_name{
    color: #fff;
    font-size: 22px;
    font-weight: 600;

    &.drop_down{
      display: none;
    }
  }
}


</style>
