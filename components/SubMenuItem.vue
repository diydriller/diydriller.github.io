<template>
  <div class="sub_menu_item">
    <NuxtLink :to="'/'+title+'/'+subTitle">{{subTitle}}</NuxtLink>
  </div>
</template>

<script lans="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props:['subTitle','title'],
  setup(){

  }
});
</script>

<style lang="scss" scoped>

.sub_menu_item {
  a {
    color: #fff;
    font-size: 15px;
    padding: 5px 0;
    text-decoration: none;
    white-space: nowrap;
    opacity: 0.6;

    &:hover{
      opacity: 1;
    }
  }
}


</style>
