---
layout: home
title: 随想录
archive: false
hero:
  name: 随想录
  text: 张晓山的 Notebook
  tagline: 一些杂乱的内容，不知道该放去哪就全部塞到这里了。
  image:
  actions:
    - theme: brand
      text: 首页
      link: /
    - theme: alt
      text: 随机文章
      link: /post/test
---
<script setup lang="ts">
import { data as posts } from '../../.vitepress/components/archive/post.data.mts'
</script>

<ul>
  <li v-for="post in posts" :key="post.url">
    <a :href="post.url">{{ post.title }}</a>
    <span style="color: gray; margin-left: 10px;">
      {{ post.date }}
    </span>
  </li>
</ul>