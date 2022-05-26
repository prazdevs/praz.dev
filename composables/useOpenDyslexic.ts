import { defineStore } from 'pinia'

export const useOpenDyslexic = defineStore('open-dyslexic', () => {
  const openDyslexic = useCookie('open-dyslexic', { default: () => false })

  return { openDyslexic }
})
