<template>
  <div>
    <side-bar/>
    <navigation-bar class="nav" :class="{'drop_down':dropDownButtonClicked}"/>
    <div class="content" :class="{'drop_down':dropDownButtonClicked}">
      <Nuxt/>
    </div>
  </div>
</template>


<script lang="ts">
import {defineComponent, useStore, computed,ref} from '@nuxtjs/composition-api'
import { ButtonStoreType } from "~/store/button"
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


<style scoped>


.nav ,
.content {
  position: relative;
  width: calc(100% - 260px);
  left: 260px;
}

.content {
  height: 100vh;
  background: #FFFFFF;
}

.nav.drop_down ,
.content.drop_down {
  left: 78px;
  width: calc(100% - 78px);
}

</style>
