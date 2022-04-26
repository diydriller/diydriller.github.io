<template>
  <div class="side_bar" :class="{'drop_down':dropDownButtonClicked}">
    <title-item/>

    <div class="category">
<!--      <category-item v-for="category in categories"-->
<!--                     :key="category.title"-->
<!--                     :title="category.title"-->
<!--                     :icon="category.icon"-->
<!--                     :subCategories="category.subCategories"-->
<!--      />-->
      <category-item v-for="[k,v] in categoryMap"
                     :key="k"
                     :name="k"
                     :icon="v.icon"
                     :subCategoryMap="v.subCategoryMap"
                     v-if="categoryMap"
      />
<!--      <div class="test">-->
<!--        {{articles.length}} {{categoryMap.size}}-->
<!--      </div>-->

    </div>
    <profile-item/>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  useStore,
  ref,
  onMounted,
  useContext,
  useFetch,
  reactive, onBeforeMount, onUpdated, onBeforeUpdate, useAsync
} from '@nuxtjs/composition-api'
import CategoryItem from "@/components/CategoryItem.vue";
import TitleItem from "@/components/TitleItem.vue";
import ProfileItem from "@/components/ProfileItem.vue"
import CategoryData from "~/data/categoryData";
import {ButtonStoreType} from "~/store/button";
import {Category} from "~/interfaces/Category";

export default defineComponent({
  components:{
    CategoryItem,
    TitleItem,
    ProfileItem
  },
  setup(){
    const store=useStore<ButtonStoreType>();
    const { $content} = useContext();

    const dropDownButtonClicked = ref(computed(()=>store.getters["button/dropDownButtonState"]));
    let articles:any=ref({});

    const categoryMap=new Map<string,Category>();
    articles=useAsync(  () =>
      $content({deep: true}).fetch()
    );


    onBeforeMount(()=>{
      for(let index=0;index<articles.value.length;index++){
        let article=articles.value[index];
        let categoryName:string=article.dir.split('/')[1];
        let subCategoryName:string=article.dir.split('/')[2];

        const categoryValue=categoryMap.get(categoryName);
        let subCategoryMap=new Map<string,number>();

        if(!categoryValue){
          subCategoryMap.set(subCategoryName,1);
          categoryMap.set(categoryName,{
            name:categoryName,
            icon:`~assets/icon/${categoryName}.png`,
            subCategoryMap:subCategoryMap
          });
          continue;
        }

        subCategoryMap=categoryValue.subCategoryMap;
        const subCategoryValue=subCategoryMap.get(subCategoryName);
        if(subCategoryValue){
          subCategoryMap.set(subCategoryName,1+subCategoryValue);
          continue;
        }
        subCategoryMap.set(subCategoryName,1);
      }
    });

    // const categories=computed(function (){
    //   return CategoryData.categories;
    // });

    return {dropDownButtonClicked,categoryMap,articles};
  }
})
</script>

<style lang="scss" scoped>
@import './assets/scss/variables.scss';

.test{
  background-color: white;
}

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
