<template>
  <div class="sub_menu" :class="{'show_menu':state.downButtonClicked}">
    <sub-menu-item v-for="subCategory in subCategories"
                   :key="subCategory.subTitle"
                   :sub-title="subCategory.subTitle"
                   :title="title"
    />
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, reactive , ref} from '@vue/composition-api';
import SubMenuItem from './SubMenuItem.vue';

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
    const state=reactive({
      downButtonClicked:computed(()=>props.downButtonClicked)
    });

    return {state}
  }
});
</script>

<style scoped>

.sub_menu {
  padding: 6px 6px 14px 80px;
  background: #1d1b31;
  display: none;
}

.sub_menu.show_menu {
  display: block;
}

</style>

