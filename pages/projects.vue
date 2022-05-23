<script setup lang="ts">

</script>

<template>
  <div>
    <ContentQuery v-slot="{ data }" path="projects">
      {{ data }}
    </ContentQuery>
  </div>
</template>
