<template>
  <div class="side_bar" :class="{'drop_down':dropDownButtonClicked}">
    <title-item/>
    <div class="category">
      <category-item v-for="category in categories"
                     :key="category.title"
                     :title="category.title"
                     :icon="category.icon"
                     :subCategories="category.subCategories"
      />
    </div>
    <profile-item/>
  </div>
</template>

<script lang="ts">
import {defineComponent, computed, useStore, ref} from '@nuxtjs/composition-api'
import CategoryItem from "@/components/CategoryItem.vue";
import TitleItem from "@/components/TitleItem.vue";
import ProfileItem from "@/components/ProfileItem.vue"
import Category from "@/data/category";
import {ButtonStoreType} from "~/store/button";

export default defineComponent({
  components:{
    CategoryItem,
    TitleItem,
    ProfileItem
  },
  setup(){
    const store=useStore<ButtonStoreType>();

    const dropDownButtonClicked = ref(computed(()=>store.getters["button/dropDownButtonState"]));

    const categories=computed(function (){
      return Category.categories;
    });

    return {categories,dropDownButtonClicked};
  }
})
</script>

<style lang="scss" scoped>
@import './assets/scss/variables.scss';


.side_bar{
  position: fixed;
  top:0;
  left:0;
  height: 100%;
  width: $before-dropdown-width;
  background: #11101d;
  z-index: 10;

  &.drop_down{
    width: $after-dropdown-width;
  }
}

.category{
  padding-top: 30px;
}
</style>
