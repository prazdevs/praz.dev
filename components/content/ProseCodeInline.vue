<template>
  <span
    bg-ctp-latte-mantle
    dark:bg-ctp-mocha-mantle
    px-1
    rounded-sm
    font-mono
  >
    <ContentSlot :use="$slots.default" />
  </span>
</template>
