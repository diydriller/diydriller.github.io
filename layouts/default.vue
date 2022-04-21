<template>
  <div>
    <side-bar/>
    <navigation-bar/>
    <div class="content" :class="{'drop_down':dropDownButtonClicked}">
      <Nuxt/>
    </div>
  </div>
</template>


<script lang="ts">
import {defineComponent, useStore, computed,ref} from '@nuxtjs/composition-api'
import { ButtonStoreType } from "@/store/button"
import SideBar from "@/components/SideBar.vue";
import NavigationBar from "@/components/NavigationBar.vue";

export default defineComponent({
  components:{
    SideBar,
    NavigationBar
  },
  setup(){

    const store=useStore<ButtonStoreType>();

    const dropDownButtonClicked = ref(computed(()=>store.getters["button/dropDownButtonState"]));

    return {dropDownButtonClicked}
  }
});
</script>


<style lang="scss" scoped>
@import './assets/scss/variables.scss';


.content {
  position: relative;
  width: calc(100% - #{$before-dropdown-width});
  left: $before-dropdown-width;
  height: 100vh;
  background: #FFFFFF;

  &.drop_down{
    left: $after-dropdown-width;
    width: calc(100% - #{$after-dropdown-width});
  }
}

</style>
