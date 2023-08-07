<template>
  <div>
    <ContentQuery v-slot="{ data }" :path="$route.path" find="one">
      <Metadata :title="data.title" />
      <h1 text-4xl text-center font-600 mb-3 mt-4 sm:mt-7>
        {{ data.title }}
      </h1>
      <div
        flex
        justify-between
        border-t-2
        border-primary
        text-lg
        m-auto
        mb-8
        pt-2
        px-3
        u:w="auto lg:80%"
      >
        <div inline-flex items-center gap-2>
          <span inline-flex i-iconoir-calendar />
          <span>{{ useDate(data.date) }}</span>
        </div>
        <div flex items-center gap-2>
          <div i-iconoir-wristwatch inline-flex />
          <span inline sm:hidden>{{ `${data.ttr}'` }}</span>
          <span hidden sm:inline>{{ `${data.ttr} min read` }}</span>
        </div>
      </div>
      <ContentRenderer :value="data" />
    </ContentQuery>
  </div>
</template>
