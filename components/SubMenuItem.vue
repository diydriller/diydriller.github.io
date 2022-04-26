<template>
    <div class="sub_menu_item">
      <NuxtLink :to="'/'+name+'/'+subName">{{subName}}</NuxtLink>
      <div class="num">
        {{num}}
      </div>
    </div>
</template>

<script lang="ts">
import {useFetch, useContext, defineComponent, ref, onMounted} from "@nuxtjs/composition-api";
import {ArticlePreview} from "~/interfaces/ArticlePreview";

export default defineComponent({
  props:['subName','name','num'],
  setup(props){

    const { $content} = useContext();

    let articles:any=ref(null);

    // useFetch(async () => {
    //   articles.value = await $content({deep: true})
    //     .where({dir: `/${props.title}/${props.subTitle}`})
    //     .only(['title','slug'])
    //     .fetch<ArticlePreview>();
    // }).fetch();

    // let tmp:any=ref(null);
    // useFetch(async () => {
    //   tmp.value = await $content({deep: true})
    //     .fetch();
    // }).fetch();
    //
    //
    // console.log(tmp);


    return {articles};
  }
});
</script>

<style lang="scss" scoped>

.sub_menu_item {
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: #fff;
    font-size: 15px;
    padding: 5px 0;
    text-decoration: none;
    white-space: nowrap;
    opacity: 0.6;

    &:hover {
      opacity: 1;
    }
  }

  .num{
    text-align: center;
    vertical-align: center;
    line-height: 20px;
    height: 20px;
    min-width: 20px;
    color: #FFFFFF;
    background-color: #342F69;
    margin-left: 5px;
    margin-bottom: 10px;
    border-radius: 5px;
  }
}



</style>
