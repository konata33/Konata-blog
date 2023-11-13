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
