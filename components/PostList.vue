<script setup lang="ts">
const posts = [
  {
    title: 'Asynchronous <select> options for dynamic forms with Vue 3',
    to: '/blog/access',
    date: '4-10-2021',
    ttr: '6 min read',
    tags: ['typescript', 'vuejs'],
    excerpt: 'When working with generic forms, I came across another asynchronous behaviour issue. These forms were generated from a json schema, and some…',
  },
  {
    title: 'Rebuilding my website for accessibility',
    to: '/blog/asynchronous',
    date: '9-11-2020',
    ttr: '7 min read',
    tags: ['storytime', 'accessibility'],
    excerpt: 'I recently decided to rebuild my website from scratch (apart from content) with accessibility in mind. I want to share with you why…',
  },
  {
    title: 'Handling async authentication flow in React with Redux & Redux-Saga',
    to: '/blog/asynchronous',
    date: '30-06-2020',
    ttr: '11 min read',
    tags: ['react', 'redux'],
    excerpt: 'Handling async authentication flow in React with Redux & Redux-Saga Redux is an amazing state management solution but it doesn\'t allow…',
  },
  {
    title: 'Dark mode in a React app with Context and Styled-components',
    to: '/blog/asynchronous',
    date: '22-05-2020',
    ttr: '7 min read',
    tags: ['react'],
    excerpt: 'I hate light themes. And I have fairly good reasons to: chronic migraine, eye dryness... And I wish every website offered me the possibility…',
  },
]
</script>

<template>
  <div flex flex-col>
    <div v-for="post in posts" :key="post.title" flex flex-col gap-2 not-last:border-b-1 not-last-pb-6 not-first-pt-6>
      <h2>
        <NuxtLink :to="post.to" main-link font-600 text-xl leading-relaxed sm:leading-loose>
          {{ post.title }}
        </NuxtLink>
      </h2>
      <div flex gap-3>
        <div flex items-center gap-1>
          <div i-iconoir-calendar inline-flex />
          <span>{{ post.date }}</span>
        </div>
        <div flex items-center gap-1>
          <div i-iconoir-wristwatch inline-flex />
          <span>{{ post.ttr }}</span>
        </div>
      </div>
      <div inline-flex gap-2>
        <TechTag v-for="tag in post.tags" :key="tag" :tech="tag" />
      </div>
      <p>{{ post.excerpt }}</p>
    </div>
  </div>
</template>
