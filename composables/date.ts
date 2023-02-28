export function useDate(date: string) {
  return new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export const prideMonth = computed(
  () => true || useDateFormat(useNow({ interval: 1000 }), 'M').value === '6',
)
