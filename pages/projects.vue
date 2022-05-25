<script setup lang="ts">
const { data: projects } = await useAsyncData('projects', () =>
  queryContent<{
    title: string
    description: string
    projects: Array<{
      title: string
      link: string
      description: string
      tags: Array<string>
    }>
  }>('projects').findOne(),
)
</script>

<template>
  <div flex flex-col gap-7 mt-4 sm:mt-7>
    <div flex flex-col gap-4>
      <h1 h1-primary mr-auto>
        {{ projects.title }}
      </h1>
      <p>{{ projects.description }}</p>
    </div>
    <div flex flex-col>
      <div
        v-for="project in projects.projects"
        :key="project.title"
        flex
        flex-col
        gap-2
        not-last:border-b-1
        not-last-pb-6
        not-first-pt-6
      >
        <h2>
          <NuxtLink
            :to="project.link"
            target="_blank"
            main-link
            font-600
            text-xl
            leading-relaxed
            sm:leading-loose
          >
            {{ project.title }}
          </NuxtLink>
        </h2>
        <div inline-flex gap-2 flex-wrap>
          <TechTag v-for="tag in project.tags" :key="tag" :tech="tag" />
        </div>
        <p>{{ project.description }}</p>
      </div>
    </div>
  </div>
</template>
