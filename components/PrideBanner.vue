<template>
  <div
    id="inclusive"
    w-full
    text-base
    sm:text-xl
    text-center
    font-bold
    py-1
    sm:py-2
    leading-tight
  >
    <NuxtLink
      text-white
      text-shadow-black
      underline
      hover:no-underline
      to="https://www.thetrevorproject.org/"
      target="_blank"
    >
      {{ "Happy Pride Month ! Support young LGBTQ lives through The Trevor Project." }}
    </NuxtLink>
  </div>
</template>

<style scoped>
#inclusive {
  background: linear-gradient(
    to bottom,
    #000,
    #000 12.5%,
    #784f16 12.5%,
    #784f16 25%,
    #e40303 25%,
    #e40303 37.5%,
    #ff8c00 37.5%,
    #ff8c00 50%,
    #ffed00 50%,
    #ffed00 62.5%,
    #008026 62.5%,
    #008026 75%,
    #004dff 75%,
    #004dff 87.5%,
    #750787 87.5%,
    #750787
  );
}
</style>
