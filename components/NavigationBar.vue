<template>
  <div class="navigation_bar">
    <i class="bx bx-menu" @click.prevent="dropDownBar"></i>
    <div class="list">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="#">About Me</NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent,useStore} from '@nuxtjs/composition-api';
import { ButtonStoreType } from "~/store/button"

export default defineComponent({
  setup(){

    const store = useStore<ButtonStoreType>();

    const dropDownBar=()=>{
      store.commit("button/toggleDropDown");
    };

    return {dropDownBar}
  }
});
</script>

<style scoped>
.navigation_bar {
  display: flex;
  height: 60px;
  align-items: center;
  background-color: #11101d;
}

.bx-menu {
  font-size: 35px;
  color: #fff;
  cursor: pointer;
}

.list{
  margin-left: auto;
}

i,
.list a{
  color: white;
  font-size: 17px;
  padding: 0 10px 0
}

i:hover,
.list a:hover{
  opacity: 0.6;
}

</style>
