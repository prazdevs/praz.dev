import { readFile } from 'fs/promises'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
} from 'unocss'

export default defineConfig({
  theme: {
    fontFamily: {
      sans: 'Montserrat Alternates',
    },
  },
  presets: [
    presetUno(),
    presetTypography(),
    presetAttributify({ prefix: 'u:' }),
    presetIcons({
      scale: 1.2,
      collections: {
        assets: {
          mononoke: () => readFile('assets/svgs/mononoke.svg', 'utf-8'),
        },
      },
    }),
  ],
  transformers: [transformerDirectives()],
  shortcuts: [
    ['main-container', 'max-w-992px'],
    ['background-color', 'bg-white dark:bg-gray-800'],
    ['text-primary', 'text-red-600 dark:text-red-400'],
    ['outline-primary', 'rounded outline-offset-3 outline-solid outline-2 outline-red-600 dark:outline-red-400'],
    ['border-primary', 'border-red-600 dark:border-red-400'],
    ['header-link', 'flex items-center hover-text-red-600 dark:hover-text-red-400 focus-visible:(rounded outline-offset-3 outline-solid outline-2 outline-red-600 dark:outline-red-400) motion-safe:(transition-all duration-150 ease-in-out)'],
    ['main-link', 'font-500 border-b-1 border-black dark:border-white hover-border-red-600 dark:hover-border-red-400 hover-text-red-600 dark:hover-text-red-400 focus-visible:(rounded outline-offset-3 outline-solid outline-2 outline-red-600 dark:outline-red-400) motion-safe:(transition-all duration-150 ease-in-out hover-pb-1)'],
  ],
})
