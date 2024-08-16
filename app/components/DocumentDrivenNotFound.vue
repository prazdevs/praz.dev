<script setup>
useSeoMeta({ title: '404' })
</script>

<template>
  <div class="not-found">
    <h1 class="title">
      Uh oh... this page doesn't exist!
    </h1>
    <NotFound class="image" />
    <ContentLink class="link" to="/">
      Bring me home
    </ContentLink>
  </div>
</template>

<style scoped>
.not-found {
  text-align: center;
}

.title {
  color: var(--color-accent);
  font-family: var(--font-family-heading);
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  margin-top: var(--spacing-9);
  margin-bottom: var(--spacing-4);
  line-height: 1.15;
}

.image {
  width: 100%;
  height: 100%;
  margin: auto;
}

.link {
  font-size: var(--font-size-2xl);
}

@media screen and (min-width: 640px) {
  .image {
    width: 75%;
  }
}
</style>
