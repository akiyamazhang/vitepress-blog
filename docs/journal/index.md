---
layout: home
title: 生活记录
archive: false
hero:
  name: 生活记录
  text: 张晓山的 Notebook
  tagline: 至少每个月记录一次，不要忘记自己做了什么。
  image:
  actions:
    - theme: brand
      text: 首页
      link: /
    - theme: alt
      text: 随机文章
      link: /journa/test
---
<script setup lang="ts">
import { data as posts } from '../../.vitepress/components/archive/journal.data.mts'
</script>

<ul>
  <li v-for="post in posts" :key="post.url">
    <a :href="post.url">{{ post.title }}</a>
    <span style="color: gray; margin-left: 10px;">
      {{ post.date }}
    </span>
  </li>
</ul>