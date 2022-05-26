<script setup lang="ts">
defineProps<{ author?: string }>()
</script>

<template>
  <div flex my-2 pl-2 pr-4 sm:pl-4 sm:pr-6 w-full>
    <div>
      <span mt-2 sm:mr-2 block text-xl i-iconoir-quote />
    </div>
    <blockquote font-script flex flex-col px-2 w-full u:text="1.6rem">
      <p><slot /></p>
      <span v-if="author" self-end>{{ `— ${author}` }}</span>
    </blockquote>
  </div>
</template>
