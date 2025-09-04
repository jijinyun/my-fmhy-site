<template>
  <Layout>
    <template #sidebar-top>
      <EmojiFilter v-if="$frontmatter.showEmojiFilter" />
    </template>
    
    <template #page-bottom>
      <div v-if="$frontmatter.showEmojiFilter" class="page-footer">
        <!-- 可以添加一些页脚内容 -->
      </div>
    </template>
  </Layout>
</template>

<script>
import DefaultTheme from 'vitepress/theme'
import EmojiFilter from './components/EmojiFilter.vue'

export default {
  extends: DefaultTheme,
  components: {
    EmojiFilter
  }
}
</script>