<script lang="ts" setup>
const color = useColorMode()

function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}

const links = [
  {
    label: 'posts',
    to: '/posts',
    icon: 'page-flip',
  },
  {
    label: 'projects',
    to: '/projects',
    icon: 'light-bulb',
  },
]
</script>

<template>
  <div font-sans>
    <header
      pos-fixed top-0 left-0 right-0 z-1
      w-full h-3rem sm:h-4rem border-b
      text-xl
      background-color
    >
      <nav
        main-container h-full
        flex justify-between items-center
        px-3 mx-auto
      >
        <NuxtLink gap-3 sm:gap-4 header-link to="/">
          <div i-assets-mononoke text-2xl text-primary />
          <span sr-only sm:not-sr-only>
            {{ 'praz.dev' }}
          </span>
        </NuxtLink>
        <ul flex-inline items-center gap-3 sm:gap-4>
          <li
            v-for="{ icon, label, to } in links"
            :key="label"
            flex items-center
          >
            <NuxtLink
              header-link
              :to="to"
              active-class="text-primary"
            >
              <span sr-only sm:not-sr-only>{{ label }}</span>
              <div display-block sm:display-none :class="`i-iconoir-${icon}`" />
            </NuxtLink>
          </li>
          <li flex items-center>
            <NuxtLink
              header-link
              to="/a11y"
              active-class="text-primary"
            >
              <span sr-only>{{ 'accessibility' }}</span>
              <div i-iconoir-accessibility />
            </NuxtLink>
          </li>
          <li flex items-center>
            <button header-link @click="toggleDark">
              <span sr-only>toggle theme</span>
              <div i-iconoir-sun-light dark:i-iconoir-moon-sat />
            </button>
          </li>
        </ul>
      </nav>
    </header>
    <main main-container w-full mx-auto mt-3rem sm:mt-4rem p-3>
      <slot />
    </main>
    <footer
      main-container w-full
      flex flex-col justify-center items-center gap-6
      mx-auto mt-20 mb-2
    >
      <ul flex text-3xl gap-7>
        <li>
          <NuxtLink to="https://twitter.com/prazdevs" target="_blank" header-link>
            <div i-iconoir-twitter />
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="https://www.linkedin.com/in/sachabouillez/" target="_blank" header-link>
            <div i-iconoir-linkedin />
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="https://github.com/prazdevs" target="_blank" header-link>
            <div i-iconoir-github />
          </NuxtLink>
        </li>
      </ul>
      <div flex flex-col items-center gap-1>
        <p text-center>
          <span>{{ 'Made with ' }}</span>
          <span text-primary>{{ '❤' }}</span>
          <span>{{ ' using ' }}</span>
          <NuxtLink main-link target="_blank" to="https://v3.nuxtjs.org/">
            {{ 'Nuxt' }}
          </NuxtLink>
          <span>{{ ', hosted on ' }}</span>
          <NuxtLink main-link target="_blank" to="https://www.netlify.com/">
            {{ 'Netlify' }}
          </NuxtLink>
          <span>.</span>
        </p>
        <p>{{ `©${new Date().getFullYear()} — Sacha 'PraZ' Bouillez` }}</p>
      </div>
    </footer>
  </div>
</template>
