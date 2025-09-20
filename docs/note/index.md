---
layout: home
title: 读书笔记
archive: false
hero:
  name: 读书笔记
  text: 张晓山的 Notebook
  tagline: 把阅读时的想法写下来。
  image:
  actions:
    - theme: brand
      text: 首页
      link: /
    - theme: alt
      text: 随机文章
      link: /note/test
---
<script setup lang="ts">
import { data as posts } from '../../.vitepress/components/archive/note.data.mts'
</script>

<ul>
  <li v-for="post in posts" :key="post.url">
    <a :href="post.url">{{ post.title }}</a>
    <span style="color: gray; margin-left: 10px;">
      {{ post.date }}
    </span>
  </li>
</ul>