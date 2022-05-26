<template>
  <div flex flex-col sm:flex-row gap-4 justify-center items-center mt-7>
    <ContentQuery v-slot="{ data }" path="home" find="one">
      <img
        border-2 border-primary rounded-full
        h-7rem w-7rem
        src="~/assets/imgs/sacha.webp"
      >
      <div flex flex-col items-start justify-center gap-2>
        <h1 h1-primary>
          {{ data.title }}
        </h1>
        <p text-lg>
          {{ data.description }}
        </p>
      </div>
    </ContentQuery>
  </div>
</template>
