import type { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.NavItem[] = [
  { text: '首页', link: '/' },
  { text: '关于', link: '/about' },
  { text: '归档', link: '/archive' },

  {
    text: '随想录',
    items: [
      { text: '随想录', link: '/post' },
    ]
  },

  {
    text: '读书笔记',
    items: [
      { text: '读书笔记', link: '/note' },
    ]
  },

  {
    text: '生活记录',
    items: [
      { text: '生活记录', link: '/journal' },
    ]
  }
];
