<template>
  <span
    bg-gray-200
    dark:bg-gray-700
    px-1
    rounded-sm
    font-mono
  >
    <ContentSlot :use="$slots.default" />
  </span>
</template>
