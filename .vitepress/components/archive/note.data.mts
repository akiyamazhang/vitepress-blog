import { createContentLoader } from 'vitepress'

interface Archive {
  title: string
  date: string
  url: string
}

export default createContentLoader('note/*.md', {
  transform(raw): Archive[] {
    return raw
      .filter(page => page.frontmatter.archive !== false)
      .map((page) => ({
        title: page.frontmatter.title as string,
        date: page.frontmatter.date as string,
        url: page.url,
      }))
      .sort((a, b) => +new Date(b.date) - +new Date(a.date)) // 按时间倒序
  }
})
