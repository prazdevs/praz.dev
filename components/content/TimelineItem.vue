<script setup lang="ts">
defineProps<{
  from: string
  to?: string
}>()

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-gb', {
    month: 'short',
    year: 'numeric',
  })
}
</script>

<template>
  <li class="timeline-item">
    <div class="timeline-dates">
      <span>{{ formatDate(from) }}</span>
      <span v-if="to">{{ ` – ${formatDate(to)}` }}</span>
      <span v-else>{{ ' – today' }}</span>
    </div>
    <div class="timeline-marker" />
    <div class="timeline-content">
      <div class="timeline-title">
        <ContentSlot :use="$slots.title" unwrap="p" />
      </div>
      <div class="timeline-details">
        <ContentSlot :use="$slots.content" />
      </div>
    </div>
  </li>
</template>

<style scoped>
.timeline-item {
  padding-left: var(--spacing-10);
  position: relative;
}

.timeline-item:first-child {
  & .timeline-marker::before {
    background: var(--color-accent);
    border: transparent 3px solid;
  }
}

.timeline-item:last-child {
  padding-bottom: 0;

  & .timeline-marker::after {
    content: none;
  }

  & .timeline-content {
    padding-bottom: 0;
  }
}

.timeline-dates {
  margin: 0 0 var(--spacing-1) 0;
  font-size: var(--font-size-sm);
  letter-spacing: 0.125rem;
  text-transform: uppercase;
  white-space: nowrap;
}

.timeline-marker {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 15px;

  &::before {
    background: transparent;
    border: var(--color-accent) 3px solid;
    border-radius: 100%;
    content: '';
    display: block;
    height: 15px;
    position: absolute;
    top: 4px;
    left: 0;
    width: 15px;
  }

  &::after {
    content: '';
    width: 3px;
    background: var(--color-text);
    display: block;
    position: absolute;
    top: 24px;
    bottom: 0;
    left: 6px;
  }
}

.timeline-content {
  padding-bottom: var(--spacing-10);
}

.timeline-title {
  margin-top: -0.25em;
  font-size: var(--font-size-lg);
}

@media screen and (min-width: 768px) {
  .timeline-item {
    display: table-row;
    padding: 0;
  }

  .timeline-dates,
  .timeline-marker,
  .timeline-content {
    display: table-cell;
    vertical-align: top;
  }

  .timeline-marker {
    position: relative;
  }

  .timeline-content {
    padding-left: var(--spacing-7);
  }

  .timeline-dates {
    text-align: right;
    padding-right: var(--spacing-7);
  }
}
</style>
