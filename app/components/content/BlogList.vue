<script setup lang="ts">
const { navDirFromPath } = useContentHelpers()
const nav = await fetchContentNavigation()
const posts = navDirFromPath('/blog', nav)
</script>

<template>
  <ul>
    <li v-for="n in posts" :key="n._id">
      <ContentLink :to="n._path">
        {{ n.title }} - {{ n.date }}
      </ContentLink>
    </li>
  </ul>
</template>
