<template>
  <div flex flex-col gap-7 mt-4 sm:mt-7>
    <div flex flex-col sm:flex-row gap-4 justify-center items-center>
      <ContentQuery v-slot="{ data }" path="home" find="one">
        <Metadata />
        <NuxtPicture
          alt="Picture of me, Sacha, with red hair and glasses"
          src="/imgs/sacha.jpg"
          height="300px"
          width="300px"
          :img-attrs="{
            class: 'border-2 border-primary h-7rem w-7rem rounded-full',
          }"
        />
        <div flex flex-col items-center sm:items-start justify-center gap-2>
          <h1 h1-primary>
            {{ data.title }}
          </h1>
          <p text-lg>
            {{ data.description }}
          </p>
        </div>
      </ContentQuery>
    </div>
    <div text-xl mt-8 font-bold italic text-center>
      {{ 'I am currently rebuilding my website in Nuxt. Posts and projects are still available!' }}
    </div>
  </div>
</template>
