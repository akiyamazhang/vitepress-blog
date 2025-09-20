---
title: 归档
date: 2025/08/31
archive: false
---
<script setup lang="ts">
import { data as posts } from '../.vitepress/components/archive/complete.data.mts'

// 按「年/月」分组
const groupedPosts = posts.reduce((acc, post) => {
  const [year, month] = post.date.split('/').slice(0, 2); // 提取年和月
  const key = `${year}/${month}`;
  if (!acc[key]) acc[key] = [];
  acc[key].push(post);
  return acc;
}, {} as Record<string, typeof posts>);
</script>

# 归档

<div v-for="(posts, date) in groupedPosts" :key="date">
  <h2>{{ date }}</h2>
  <ul>
    <li v-for="post in posts" :key="post.url">
      <a :href="post.url">{{ post.title }}</a>
      <span style="color: gray; margin-left: 10px;">
        {{ post.date }}
      </span>
    </li>
  </ul>
</div>