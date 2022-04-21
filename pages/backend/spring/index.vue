<template>
  <div class="preview-container">
    <div class="preview">
      <div class="article-preview" v-for="articlePreview of articlePreviews" :key="articlePreview.title">
        <nuxt-link :to="'spring/'+articlePreview.slug">
          <h3>{{articlePreview.title}}</h3>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, useAsync, useContext} from '@nuxtjs/composition-api';
import {ArticlePreview} from "@/interfaces/ArticlePreview";

export default defineComponent({
  setup(){
    const { $content,params} = useContext();

    const articlePreviews = useAsync(()=>{
      return $content('backend/spring',params.value.slug)
        .only(['title','slug'])
        .sortBy('createdAt','asc')
        .fetch<ArticlePreview>();
    });

    return {articlePreviews}
  }
})
</script>

<style scoped>

.preview {
  margin: 0 auto;
  max-width: 800px;
}


.article-preview {
  padding: 15px;
  background: #FFF;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin: 0px auto 10px;
}

</style>
