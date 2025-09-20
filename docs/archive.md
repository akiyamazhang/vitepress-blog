---
title: 归档
date: 2025/08/31
archive: false
---
<script setup lang="ts">
import { data as posts } from '../.vitepress/components/archive/complete.data.mts'
</script>

# 归档

<ul>
  <li v-for="post in posts" :key="post.url">
    <a :href="post.url">{{ post.title }}</a>
    <span style="color: gray; margin-left: 10px;">
      {{ post.date }}
    </span>
  </li>
</ul>