import type { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Sidebar = {
  '/post/': [
    {
      text: '随想录', link: '/post/'
    },
    {
      text: '2025/08',
      items: [
        { text: 'test', link: '/post/test' }
      ]
    }
  ],

  '/note/': [
    {
      text: '读书笔记',
      items: [
        { text: '首页', link: '/note/' },
      ]
    }
  ],

  '/journal/': [
    {
      text: '生活记录',
      items: [
        { text: '首页', link: '/journal/' }, 
      ]
    }
  ]
}
