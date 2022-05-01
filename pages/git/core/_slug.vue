<template>
  <article>
    <nuxt-content :document="article" />
  </article>
</template>

<script lang="ts">
import {defineComponent, useAsync, useContext} from '@nuxtjs/composition-api'
import {Article} from '@/interfaces/Article'

export default  defineComponent({
  setup(){
    const { $content,params} = useContext();
    const article = useAsync(()=>{
      return $content('git/core', params.value.slug)
        .fetch<Article>();
    });

    return {article}
  }
})
</script>

<style lang="scss" scoped>
@import "./assets/scss/article-common";

</style>
