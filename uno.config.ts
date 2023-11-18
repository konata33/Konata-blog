// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import { presetRadix } from 'unocss-preset-radix'

export default defineConfig({
  shortcuts: [
    // ...
  ],
  theme: {
    breakpoints: {
      xxs: '0px',
      xs: '320px',
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1600px',
    },
    // ...
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        mono: ['Kalam'],
      },
    }),
    presetRadix({
      palette: ['blue', 'green', 'red', 'mauve', 'gray'],
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
