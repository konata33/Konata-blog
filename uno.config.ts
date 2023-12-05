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
  shortcuts: {
    '$ui-text': 'text-black dark:text-white',
  },
  rules: [
    [
      /^\$ui-dark-toggle-vtr$/,
      () => {
        return `
          ::view-transition-old(root),
          ::view-transition-new(root) {
            animation: none;
            mix-blend-mode: normal;
          }
  
          ::view-transition-old(root),
          .dark::view-transition-new(root) {
            z-index: 1;
          }
  
          ::view-transition-new(root),
          .dark::view-transition-old(root) {
            z-index: 9999;
          }
        `
      },
    ],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography({
      cssExtend: {
        a: {
          'text-decoration': 'none',
        },
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
        mono: ['Fira Code'],
      },
    }),
    presetRadix({
      palette: ['blue', 'green', 'red', 'mauve', 'gray', 'slate'],
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
