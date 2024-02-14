import RSS from 'rss'
import { joinURL, normalizeURL } from 'ufo'
import type { ParsedContent } from '@nuxt/content/types'
import { site } from '~/config'
import { serverQueryContent } from '#content/server'

interface ParsedPost extends ParsedContent {
  description?: string
  date: Date
}

export default defineEventHandler(async (event) => {
  const posts = await serverQueryContent<ParsedPost>(event)
    .where({ _dir: { $eq: 'blog' } })
    .sort({ date: -1 })
    .find()

  const feed = new RSS({
    title: site.name,
    site_url: normalizeURL(site.url),
    feed_url: joinURL(site.url, 'rss.xml'),
  })

  for (const post of posts) {
    feed.item({
      title: post.title ?? '',
      url: joinURL(site.url, post._path ?? ''),
      date: post.date,
      description: post.description ?? '',
    })
  }

  setResponseHeader(event, 'content-type', 'text/xml')

  return feed.xml({ indent: true })
})
