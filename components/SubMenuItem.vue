<template>
    <div class="sub_menu_item">
      <NuxtLink :to="'/'+title+'/'+subTitle">{{subTitle}}</NuxtLink>
      <div class="num">
        {{articles.length}}
      </div>
    </div>
</template>

<script lang="ts">
import {useFetch, useContext, defineComponent, ref} from "@nuxtjs/composition-api";
import {ArticlePreview} from "~/interfaces/ArticlePreview";

export default defineComponent({
  props:['subTitle','title'],
  setup(props){

    const { $content} = useContext();

    let articles:any=ref(null);
    useFetch(async () => {
      articles.value = await $content({deep: true})
        .where({dir: `/${props.title}/${props.subTitle}`})
        .only(['title','slug'])
        .fetch<ArticlePreview>();
    }).fetch();

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
