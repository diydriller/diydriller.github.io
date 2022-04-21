<template>
  <article>
    <nuxt-content :document="article" />
  </article>
</template>

<script lang="ts">
import {defineComponent, useAsync, useContext} from '@nuxtjs/composition-api'
import {Article} from "@/interfaces/Article";

export default  defineComponent({
  setup(){
    const { $content,params} = useContext();

    const article = useAsync(()=>{
      return $content('frontend/vue', params.value.slug)
        .fetch<Article>();
    })

    return { article }
  }
})
</script>

<style>
article {
  display: block;
  margin: 0 auto;
  padding: 50px 30px;
  max-width: 800px;
}
h1 {
  font-size: 28px;
  font-weight: 900;
  margin-bottom: 30px;
}
</style>
