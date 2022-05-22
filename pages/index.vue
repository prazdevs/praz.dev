<template>
  <div>
    <div flex flex-col sm:flex-row gap-4 justify-center items-center mt-7>
      <img
        border-2 border-primary rounded-full
        h-7rem w-7rem
        src="~/assets/imgs/sacha.webp"
      >
      <div flex flex-col items-start justify-center gap-2>
        <h1 h1-primary>
          {{ "Hey, I'm Sacha" }}
        </h1>
        <p text-lg>
          {{ "Pragmatic developer, avid learner and frontend nerd." }}
        </p>
      </div>
    </div>
  </div>
</template>
