import { Feed } from 'feed'
import { joinURL } from 'ufo'
import type { ParsedContent } from '@nuxt/content/types'
import { identity, site } from '~/config'
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

  const feed = new Feed({
    title: site.name,
    id: site.url,
    link: site.url,
    language: site.locale,
    copyright: site.copyright,
    favicon: joinURL(site.url, 'favicon.ico'),
    author: {
      name: identity.name,
      link: site.url,
    },
  })

  for (const post of posts) {
    feed.addItem({
      title: post.title ?? '',
      date: new Date(post.date),
      link: joinURL(site.url, post._path ?? ''),
      description: post.description,
    })
  }

  setResponseHeader(event, 'content-type', 'text/xml')

  return feed.rss2()
})
