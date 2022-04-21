<template>
  <div class="navigation_bar" :class="{'drop_down':dropDownButtonClicked}">
    <i class="bx bx-menu" @click.prevent="dropDownBar"></i>
    <div class="list">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="#">About Me</NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, ref, useStore} from '@nuxtjs/composition-api';
import { ButtonStoreType } from "~/store/button"

export default defineComponent({
  setup(){

    const store = useStore<ButtonStoreType>();

    const dropDownButtonClicked = ref(computed(()=>store.getters["button/dropDownButtonState"]));

    const dropDownBar=()=>{
      store.commit("button/toggleDropDown");
    };

    return {dropDownBar,dropDownButtonClicked}
  }
});
</script>

<style lang="scss" scoped>
@import './assets/scss/variables.scss';

.navigation_bar {
  display: flex;
  height: 60px;
  align-items: center;
  background-color: #11101d;

  position: relative;
  width: calc(100% - #{$before-dropdown-width});
  left: $before-dropdown-width;

  &.drop_down{
    left: $after-dropdown-width;
    width: calc(100% - #{$after-dropdown-width});
  }
}


.bx-menu {
  font-size: 35px;
  color: #fff;
  cursor: pointer;
}


.list{
  margin-left: auto;
  a{
    color: white;
    font-size: 17px;
    padding: 0 10px 0;

    &:hover{
      opacity: 0.6;
    }
  }
}


i{
  color: white;
  font-size: 17px;
  padding: 0 10px 0;

  &:hover{
    opacity: 0.6;
  }
}


</style>
