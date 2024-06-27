<template>
  <ol>
    <slot />
  </ol>
</template>

<style scoped>
ol {
  font-size: var(--font-size-md);
  margin-top: 1rem;
  margin-bottom: 1rem;
  counter-reset: li;

  & :deep(li) {
    list-style: none;
    counter-increment: li;

    &::before {
      content: counter(li);
      color: var(--color-accent);
      font-family: var(--font-family-heading);
      font-weight: var(--font-weight-bold);
      display: inline-block;
      width: 1em;
      margin-left: -1em;
    }

    &:not(:first-child) {
      margin-top: 1rem;
    }

    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }

  & :deep(ol),
  & :deep(ul) {
    margin-top: 0em;
    margin-bottom: 0em;
  }
}
</style>
