<script setup lang="ts">
import { animate } from 'motion'

const props = defineProps<{
  name: string
  repo: string
  description: string
}>()

const { data } = useLazyFetch(`https://ungh.cc/repos/${props.repo}`, {
  transform: (d: { repo: { stars: number, forks: number } }) => d.repo,
  server: false,
})

const stars = ref(0)
const forks = ref(0)

whenever(data, (d) => {
  animate(0, d.stars, {
    duration: 1,
    ease: 'easeInOut',
    onUpdate: v => stars.value = Math.round(v),
  })
  animate(0, d.forks, {
    duration: 1,
    ease: 'easeInOut',
    onUpdate: v => forks.value = Math.round(v),
  })
})
</script>

<template>
  <li class="project">
    <ContentLink
      class="name"
      target="_blank"
      :to="`https://github.com/${repo}`"
    >
      {{ name }}
      <Icon name="mingcute:external-link-line" />
      <span class="visually-hidden">
        {{ '(opens in a new tab)' }}
      </span>
    </ContentLink>
    <div>
      {{ description }}
    </div>
    <div class="repo-data">
      <span title="stars">
        <Icon class="icon" name="mingcute:star-line" />
        <span>{{ stars }}</span>
      </span>
      <span title="forks">
        <Icon class="icon" name="mingcute:git-branch-line" />
        <span>{{ forks }}</span>
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
