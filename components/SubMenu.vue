<template>
  <div class="sub_menu" :class="{'show_menu': state.downButtonClicked , 'drop_down':dropDownButtonClicked}">
    <sub-menu-item v-for="[k,v] in subCategoryMap"
                   :key="k"
                   :sub-name="k"
                   :num="v"
                   :name="name"
    />
  </div>
</template>

<script lang="ts">
import SubMenuItem from '@/components/SubMenuItem.vue';
import {ref, useStore,reactive,computed,defineComponent} from "@nuxtjs/composition-api";
import {ButtonStoreType} from "~/store/button";

export default defineComponent({
  components:{
    SubMenuItem
  },
  props:[
    'subCategoryMap',
    'name',
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

