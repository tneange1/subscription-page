import { createTheme, MantineColorsTuple } from '@mantine/core'

import components from './overrides'

const NEUTRAL: MantineColorsTuple = [
    '#f2f2f2',
    '#e5e5ea',
    '#d1d1d6',
    '#c7c7cc',
    '#aeaeb2',
    '#8e8e93',
    '#6e6e73',
    '#48484a',
    '#f2f2f2',
    '#d1d1d6'
]

export const theme = createTheme({
    components,
    cursorType: 'pointer',
    fontFamily:
        'Inter, Vazirmatn, Apple Color Emoji, Noto Sans SC, Twemoji Country Flags, sans-serif',
    fontFamilyMonospace: 'Fira Mono, monospace',
    breakpoints: {
        xs: '25em',
        sm: '30em',
        md: '48em',
        lg: '64em',
        xl: '80em',
        '2xl': '96em',
        '3xl': '120em',
        '4xl': '160em'
    },
    scale: 1,
    fontSmoothing: true,
    focusRing: 'never',
    white: '#ffffff',
    black: '#111111',
    colors: {
        // палитра приложения Mikaela VPN: #111 / #181818 / #2a2a2a
        dark: [
            '#f2f2f2',
            '#d1d1d6',
            '#8e8e93',
            '#6e6e73',
            '#383838',
            '#2a2a2a',
            '#202020',
            '#181818',
            '#111111',
            '#0a0a0a'
        ],
        // акцентные цвета — нейтральные, как в приложении (кнопка белая, текст на ней тёмный)
        cyan: NEUTRAL,
        blue: NEUTRAL,
        violet: NEUTRAL,
        teal: NEUTRAL,
        indigo: NEUTRAL,
        grape: NEUTRAL,
        pink: NEUTRAL,
        lime: NEUTRAL,
        green: [
            '#e6f9ec',
            '#c4f0d1',
            '#8fe3a8',
            '#5fd382',
            '#34c759',
            '#34c759',
            '#2fb350',
            '#34c759',
            '#34c759',
            '#1f8a3a'
        ]
    },
    primaryShade: 8,
    primaryColor: 'cyan',
    autoContrast: true,
    luminanceThreshold: 0.3,
    headings: {
        fontFamily: 'Inter, Vazirmatn, Apple Color Emoji, Noto Sans SC, sans-serif',
        fontWeight: '500'
    },
    defaultRadius: 'md'
})
