<script setup lang="ts">
const { navDirFromPath } = useContentHelpers()
const nav = await fetchContentNavigation()
const notes = navDirFromPath('/notes', nav)
</script>

<template>
  <ul>
    <li v-for="n in notes" :key="n._id">
      <ContentLink :to="n._path">
        {{ n.title }} - {{ n.date }}
      </ContentLink>
    </li>
  </ul>
</template>
