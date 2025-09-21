import { defineConfig } from 'vitepress'
import { sidebar } from './components/sidebar.mts'
import { nav } from './components/nav.mts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  cleanUrls: true,
  base: '/',
  markdown: {
    image: {
      lazyLoading: true
    }
  },
    
  title: "小山园",
  description: "张晓山的 Notebook",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/profile.svg',

    search: {
      provider: 'local'
    },

    nav,

    sidebar,

    socialLinks: [
      { icon: 'twitter', link: 'https://x.com/Kara_8964st' },
      { icon: 'github', link: 'https://github.com/akiyamazhang' }
    ],

    footer: {
      message: '© 2025 小山园. Released under the MIT License.',
    }
  }
})
