<script setup lang="ts">
defineProps<{ reverse?: boolean, image: string }>()
</script>

<template>
  <div class="home-header" :class="{ reverse }">
    <div class="content">
      <slot />
    </div>
    <div class="image-container">
      <NuxtImg class="image" :src="image"  />
    </div>
  </div>
</template>

<style scoped lang="postcss">
.home-header {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
}

.image-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.image {
  border-radius: 50%;
  border: 2px solid var(--color-accent);
  display: block;
  max-width: 275px;
  max-height: 275px;
  height: auto;
  width: auto;
}



@media screen and (min-width: 600px) {
  .home-header {
    flex-direction: row-reverse;
    gap: var(--spacing-8);

    &.reverse {
      flex-direction: row;
    }
  }

  .image-container {
    margin-top: var(--spacing-8);
  }
  
  .image {
    max-height: 200px;
    max-width: 200px;
  }
}
</style>
