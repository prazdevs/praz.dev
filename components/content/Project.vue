<script setup lang="ts">
import { joinURL } from 'ufo'

const props = defineProps<{
  name: string
  repo: string
  description: string
}>()

const { data } = useLazyFetch(joinURL('https://ungh.cc/repos', props.repo), {
  transform: (d: { repo: { stars: number, forks: number } }) => d.repo,
  default: () => ({ stars: '-', forks: '-' }),
})
</script>

<template>
  <li class="project">
    <ContentLink
      class="name"
      target="_blank"
      :to="joinURL('https://github.com', repo)"
    >
      {{ name }}
      <Icon name="ph:arrow-square-out-bold" />
      <span class="visually-hidden">
        {{ '(opens in a new tab)' }}
      </span>
    </ContentLink>

    <div>
      {{ description }}
    </div>
    <div class="repo-data">
      <span title="stars">
        <Icon class="icon" name="ph:star-bold" />
        {{ data.stars }}
      </span>
      <span title="forks">
        <Icon class="icon" name="ph:git-fork-bold" />
        {{ data.forks }}
      </span>
    </div>
  </li>
</template>

<style scoped>
.project {
  margin: var(--spacing-10) 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);

  &:first-child {
    margin-top: 2.25rem;
  }
}

.name {
  font-size: var(--font-size-lg);
  display: flex;
  align-items: center;
  gap: var(--spacing-1);
}

.link {
  display: inline-flex;
  width: fit-content;
}

.repo-data {
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  gap: var(--spacing-3);

  & > span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-1);
  }

  & .icon {
    color: var(--color-accent);
    font-size: var(--font-size-lg);
  }
}
</style>
