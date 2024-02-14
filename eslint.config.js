import config from '@antfu/eslint-config'

export default config({
  formatters: {
    css: true,
  },
  typescript: {
    tsconfigPath: 'tsconfig.json',
  },
})
