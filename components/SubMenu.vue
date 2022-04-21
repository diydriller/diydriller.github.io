<template>
  <div class="sub_menu" :class="{'show_menu': state.downButtonClicked , 'drop_down':dropDownButtonClicked}">
    <sub-menu-item v-for="subCategory in subCategories"
                   :key="subCategory.subTitle"
                   :sub-title="subCategory.subTitle"
                   :title="title"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent,reactive,computed } from '@vue/composition-api'
import SubMenuItem from '@/components/SubMenuItem.vue';
import {ref, useStore} from "@nuxtjs/composition-api";
import {ButtonStoreType} from "~/store/button";

export default defineComponent({
  components:{
    SubMenuItem
  },
  props:[
    'subCategories',
    'title',
    'downButtonClicked'
  ],
  setup(props){
    const store=useStore<ButtonStoreType>();

    const dropDownButtonClicked = ref(computed(()=>store.getters["button/dropDownButtonState"]));
    const state=reactive({
      downButtonClicked:computed(()=>props.downButtonClicked)
    });

    return {state,dropDownButtonClicked}
  }
});
</script>

<style lang="scss" scoped>

.item:hover .drop_down{
  opacity:1;
  pointer-events: auto;
  top:0px;
}

.sub_menu {
  padding: 6px;
  text-align: center;
  background: #1d1b31;
  display: none;

  &.show_menu{
    display: block;
  }

  &.drop_down{
    position: absolute;
    left: 100%;
    display: block;
    top:-10px;
    padding: 10px 20px;
    border-radius: 0 6px 6px 0;
    opacity: 0;
    pointer-events: none;
    transition: 0.4s ease;
  }
}

</style>

