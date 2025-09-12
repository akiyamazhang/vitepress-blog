import { defineConfig } from 'vitepress'

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

    nav: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/about' },
      { text: '归档', link: '/archive' },

      {
        text: '随想录',
        items:[
          { text: '归档', link: '/post' },
        ]
      },

      {
        text: '读书笔记',
        items:[
          { text: '归档', link: '/note' },
        ]
      },

      {
        text: '生活记录',
        items:[
          { text: '归档', link: '/journal' },
        ]
      }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'twitter', link: 'https://x.com/Kara_8964st' },
      { icon: 'github', link: 'https://github.com/akiyamazhang' }
    ],

    footer: {
      message: '© 2025 小山园. Released under the MIT License.',
    }
  }
})
