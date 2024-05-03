<template>
  <ol class="timeline">
    <slot />
  </ol>
</template>

<style scoped>
.timeline {
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
}

@media (--screen-md) {
  .timeline {
    display: table;
    margin-top: 2.25rem;
    margin-bottom: 1rem;
  }
}
</style>
