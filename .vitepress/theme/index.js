import DefaultTheme from 'vitepress/theme'
import './custom.css'
import EmojiFilter from './components/EmojiFilter.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('EmojiFilter', EmojiFilter)
  }
}