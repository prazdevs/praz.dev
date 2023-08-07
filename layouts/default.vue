<script lang="ts" setup>
const color = useColorMode()

function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <div font-sans leading-relaxed>
    <header
      w-full border-b
      text-xl
    >
      <nav
        h-3rem sm:h-4rem
        main-container
        flex justify-between items-center
        px-3 mx-auto
      >
        <NuxtLink class="group" gap-3 sm:gap-4 header-interactible to="/">
          <MaskIcon
            h-2rem text-2xl text-primary
            motion-safe:group-hover-animate-spin
            motion-safe:group-hover-animate-duration-2s
          />
          <span sr-only sm:not-sr-only font-unicase text-lg>
            {{ 'praz.dev' }}
          </span>
        </NuxtLink>
        <ul flex-inline items-center gap-3 sm:gap-4>
          <li flex items-center>
            <NuxtLink
              header-link
              to="/posts"
              active-class="border-text"
            >
              <span sr-only sm:not-sr-only>{{ 'posts' }}</span>
              <div display-block sm:display-none i-iconoir-page-flip />
            </NuxtLink>
          </li>
          <li flex items-center>
            <NuxtLink
              header-link
              to="/projects"
              active-class="border-text"
            >
              <span sr-only sm:not-sr-only>{{ 'projects' }}</span>
              <div display-block sm:display-none i-iconoir-light-bulb />
            </NuxtLink>
          </li>
          <li flex items-center>
            <button header-interactible @click="toggleDark">
              <span sr-only>
                {{ `switch to ${$colorMode.value === 'dark' ? 'light' : 'dark'} theme` }}
              </span>
              <div i-iconoir-sun-light dark:i-iconoir-moon-sat />
            </button>
          </li>
        </ul>
      </nav>
    </header>
    <main main-container w-full mx-auto p-4>
      <slot />
    </main>
    <footer
      main-container w-full
      flex flex-col justify-center items-center gap-6
      mx-auto mt-20 pb-6
    >
      <ul flex text-3xl gap-7>
        <li>
          <NuxtLink
            to="https://twitter.com/prazdevs"
            target="_blank"
            header-link
          >
            <div i-iconoir-twitter />
            <span sr-only>Twitter</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="https://www.linkedin.com/in/sachabouillez"
            target="_blank"
            header-link
          >
            <div i-iconoir-linkedin />
            <span sr-only>LinkedIn</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="https://github.com/prazdevs"
            target="_blank"
            header-link
          >
            <div i-iconoir-github />
            <span sr-only>GitHub</span>
          </NuxtLink>
        </li>
      </ul>
      <div flex flex-col items-center gap-1>
        <p text-center>
          <span>{{ 'Made with ' }}</span>
          <span text-primary>{{ '❤' }}</span>
          <span>{{ ' using ' }}</span>
          <NuxtLink main-link target="_blank" to="https://nuxt.com">
            {{ 'Nuxt' }}
          </NuxtLink>
          <span>{{ ', hosted on ' }}</span>
          <NuxtLink main-link target="_blank" to="https://www.netlify.com">
            {{ 'Netlify' }}
          </NuxtLink>
          <span>.</span>
        </p>
        <p text-center>
          <span font-sans>{{ '©' }}</span>
          <span>
            {{ `${new Date().getFullYear()} — Sacha 'PraZ' Bouillez` }}
          </span>
        </p>
      </div>
    </footer>
  </div>
</template>
