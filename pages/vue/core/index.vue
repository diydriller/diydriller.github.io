<template>
  <div class="preview-container">
    <div class="preview">
      <div class="article-preview" v-for="articlePreview of articlePreviews" :key="articlePreview.title">
        <nuxt-link :to="'core/'+articlePreview.slug">
          <h3>{{articlePreview.title}}</h3>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, useAsync, useContext} from '@nuxtjs/composition-api'
import {ArticlePreview} from "@/interfaces/ArticlePreview";

export default defineComponent({
  setup(){
    const { $content,params} = useContext();

    const articlePreviews = useAsync(()=>{
      return $content('vue/core',params.value.slug)
        .only(['title','slug'])
        .sortBy('createdAt','asc')
        .fetch<ArticlePreview>();
    })

    return {articlePreviews}
  }
})
</script>

<style lang="scss" scoped>

@import "./assets/scss/aricle-preview-common";

</style>
