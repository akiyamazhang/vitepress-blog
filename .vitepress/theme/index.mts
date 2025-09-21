import DefaultTheme from 'vitepress/theme'
import './custom.css'
import Comments from '../components/comments.vue'
import Layout from './Layout.vue'

export default {
  ...DefaultTheme,
  Layout, // 替换 Layout
  enhanceApp({ app }) {
    app.component('Comments', Comments)
  }
}
