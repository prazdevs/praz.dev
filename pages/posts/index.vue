<script setup lang="ts">
const { formatDate } = useDate()

const { data } = await useAsyncData('post-data', () =>
  queryContent('posts')
    .where({ _id: { $regex: 'posts:index' } })
    .findOne(),
)
const { data: posts } = await useAsyncData('post-list', () =>
  queryContent('posts')
    .where({ _empty: { $eq: false }, _id: { $regex: /\d+.*/i } })
    .sort({ _id: 0 })
    .only(['title', 'tags', 'date', 'description', '_path'])
    .find(),
)
</script>

<template>
  <div flex flex-col gap-7 mt-4 sm:mt-7>
    <div flex flex-col gap-4>
      <!-- <ContentQuery v-slot="{ data }" :where="{ _id: { $regex: 'posts:index' } }"> -->
      <h1 h1-primary mr-auto>
        {{ data.title }}
      </h1>
      <p>{{ data.description }}</p>
      <!-- </ContentQuery> -->
    </div>
    <div flex flex-col>
      <div
        v-for="post in posts"
        :key="post.title"
        flex flex-col gap-2
        not-last:border-b-1 not-last-pb-6 not-first-pt-6
      >
        <h2>
          <NuxtLink
            :to="post._path"
            main-link
            font-600 text-xl
            leading-relaxed sm:leading-loose
          >
            {{ post.title }}
          </NuxtLink>
        </h2>
        <div flex gap-3>
          <div flex items-center gap-1>
            <div i-iconoir-calendar inline-flex />
            <span>{{ formatDate(post.date) }}</span>
          </div>
        <!-- <div flex items-center gap-1>
          <div i-iconoir-wristwatch inline-flex />
          <span>{{ 'time to read' }}</span>
        </div> -->
        </div>
        <div inline-flex gap-2 flex-wrap>
          <TechTag v-for="tag in post.tags" :key="tag" :tech="tag" />
        </div>
        <p>{{ `${post.description.slice(0, 160)}…` }}</p>
      </div>
    </div>
  </div>
</template>
