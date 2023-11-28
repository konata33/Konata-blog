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
  shortcuts: [],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography({
      cssExtend: {
        pre: {
          'background-color': '#292929 !important',
        },
        code: {
          color: 'white',
        },
      },
    }),
    presetWebFonts({
      fonts: {
        kalam: ['Kalam'],
        mono: ['Fira Code'],

      },
    }),
    presetRadix({
      palette: ['blue', 'green', 'red', 'mauve', 'gray'],
    }),

  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
