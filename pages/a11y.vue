<template>
  <div flex flex-col gap-7 mt-4 sm:mt-7>
    <ContentQuery v-slot="{ data }" path="a11y" find="one">
      <div flex flex-col gap-4>
        <h1 h1-primary mr-auto>
          {{ data.title }}
        </h1>
        <p>{{ data.description }}</p>
      </div>
      <div>
        <h2 h2-primary my-2>
          {{ 'Text readability' }}
        </h2>
        <p>
          {{ data['open-dyslexic'] }}
        </p>
        <OpenDyslexicSwitch sm:mx-5 mt-5 />
      </div>
      <div>
        <h2 h2-primary my-2>
          {{ 'Animations' }}
        </h2>
        <p>
          {{ data.animations }}
        </p>
        <PrefersReducedMotion sm:mx-5 mt-5 />
      </div>
      <div>
        <h2 h2-primary my-2>
          {{ 'Resources' }}
        </h2>
        <p>
          {{ data.resources.description }}
        </p>
        <ul list-circle px-4 sm:mx-5 mt-5>
          <li v-for="{ name, link } in data.resources.sites" :key="link" my-1>
            <NuxtLink :href="link" target="_blank" main-link>
              {{ name }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </ContentQuery>
  </div>
</template>
