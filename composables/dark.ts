export function useDarkMode() {
  const color = useColorMode()

  return {
    isDark: computed(() => color.value === 'dark'),
    toggleDark() {
      color.preference = color.value === 'dark' ? 'light' : 'dark'
    },
  }
}
