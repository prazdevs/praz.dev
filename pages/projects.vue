<template>
  <div flex flex-col gap-7 mt-4 sm:mt-7>
    <ContentQuery v-slot="{ data }" path="projects" find="one">
      <div flex flex-col gap-4>
        <h1 h1-primary mr-auto>
          {{ data.title }}
        </h1>
        <p>{{ data.description }}</p>
      </div>
      <div flex flex-col>
        <div
          v-for="project in data.projects"
          :key="project.title"
          flex
          flex-col
          gap-3
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
              <span>{{ project.title }}</span>
              <span ml-1 text-xs i-iconoir-open-new-window inline-block />
              <span sr-only>{{ 'opens in a new tab' }}</span>
            </NuxtLink>
          </h2>
          <div inline-flex gap-2 flex-wrap>
            <TechTag v-for="tag in project.tags" :key="tag" :tech="tag" />
          </div>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </ContentQuery>
  </div>
</template>
