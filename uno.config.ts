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
    '$ui-text-description': 'color-gray-9 dark:color-gray-9',
    '$ui-project-block': 'bg-#fff8f88c dark:bg-#2b2a2ac7',
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
    [
      '$ui-fg',
      {
        'background': `radial-gradient(transparent, rgba(255 255 255) 2px)`,
        'background-size': `4px 4px`,
        'backdrop-filter': `blur(10px)`,
        'z-index': '10',
      },
    ],
    [
      '$ui-dark-fg',
      {
        'background': `radial-gradient(transparent, rgba(16 18 18) 2px)`,
        'background-size': `4px 4px`,
        'backdrop-filter': `blur(10px)`,
        'z-index': '10',
      },
    ],
  ],
  theme: {
    fontFamily: {
      newsreader: ['Newsreader Variable'],
      kalam: ['Kalam'],
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'height': '1.2em',
        'width': '1.2em',
        'vertical-align': 'text-bottom',
      },
    }),
    presetTypography({
      cssExtend: {
        'a': {
          'display': 'inline-block',
          'line-height': '1.5',
          'border-bottom': '1px dashed rgba(var(--c-context), 0.5)',
          'text-decoration': 'none',
          'transition': 'all 0.3s ease-in-out',
        },
        'a:hover': {
          'border-bottom': '1px solid rgba(var(--c-context), 1)',
        },
        'p a': {
          color: '#FF7D40',
        },
        'ul li a': {
          color: '#C0C0C0',
        },
        'pre': {
          'background': '#eee !important',
          'font-family': 'dm',
        },
        '.dark pre': {
          background: '#222 !important',
        },
        'blockquote': {
          'border-left': '0.1em solid rgba(168,85,247,.4)',
        },
      },
    }),
    presetWebFonts(),
    presetRadix({
      palette: ['blue', 'green', 'red', 'mauve', 'gray', 'slate'],
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
