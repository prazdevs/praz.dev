import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
} from 'unocss'
import presetCatppuccin from 'unocss-preset-catppuccin'

export default defineConfig({
  theme: {
    fontFamily: {
      sans: 'Montserrat Alternates',
      unicase: 'Delius Unicase',
      script: 'Indie Flower',
      mono: 'Mononoki',
    },
  },
  presets: [
    presetUno(),
    presetTypography(),
    presetAttributify({ prefix: 'u:' }),
    presetCatppuccin(),
    presetIcons({
      scale: 1.2,
    }),
  ],
  transformers: [transformerDirectives()],
  rules: [
    ['text-shadow-black', { 'text-shadow': '0 0 2px black' }],
    ['text-shadow-white', { 'text-shadow': '0 0 2px white' }],
  ],
  shortcuts: [
    // ? containers
    ['main-container', 'max-w-992px'],

    // ? colors
    ['text-primary', 'text-ctp-latte-red dark:text-ctp-mocha-red'],
    ['border-primary', 'border-ctp-latte-red dark:border-ctp-mocha-red'],
    ['border-text', 'border-ctp-latte-text dark:border-ctp-mocha-text'],

    ['h1-primary', 'text-3xl sm:text-4xl border-b-2 border-primary font-700'],
    ['h2-primary', 'text-3xl font-600'],

    ['outline-primary', 'rounded outline-offset-3 outline-solid outline-2 outline-ctp-latte-red dark:outline-ctp-mocha-red'],
    ['outline-switch', 'outline-solid outline-2 outline-red-600 dark:outline-red-400'],

    ['header-link', 'flex items-center hover:text-primary focus-visible:outline-primary motion-safe:transition-color'],
    ['main-link', 'font-500 border-b-1 !no-underline border-text hover:(text-primary border-primary) focus-visible:outline-primary motion-safe:(transition-all hover-p-b-1)'],
  ],
})
