const COLORS: Record<string, [number, number, number]> = {
    cyan: [142, 142, 147],
    teal: [142, 142, 147],
    green: [64, 192, 87],
    lime: [142, 142, 147],
    yellow: [250, 176, 5],
    orange: [253, 126, 20],
    red: [250, 82, 82],
    pink: [142, 142, 147],
    grape: [142, 142, 147],
    violet: [142, 142, 147],
    indigo: [142, 142, 147],
    blue: [142, 142, 147],
    gray: [134, 142, 150],
    dark: [55, 58, 64]
}

const DEFAULT_COLOR = COLORS.gray

const hexToRgb = (hex: string): [number, number, number] | null => {
    const match = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return match ? [parseInt(match[1], 16), parseInt(match[2], 16), parseInt(match[3], 16)] : null
}

const getRgb = (color: string): [number, number, number] =>
    COLORS[color] ?? hexToRgb(color) ?? DEFAULT_COLOR

export interface ColorGradientStyle {
    background: string
    border: string
    boxShadow?: string
}

const SEMANTIC = new Set(['green', 'red', 'yellow', 'orange'])
const isNeutral = (color: string) => !SEMANTIC.has(color) && !/^#/.test(color)

export const getColorGradient = (color: string): ColorGradientStyle => {
    const [r, g, b] = getRgb(color)
    if (isNeutral(color)) {
        return { background: '#202020', border: '1px solid #2a2a2a' }
    }
    return {
        background: `rgba(${r},${g},${b},0.12)`,
        border: `1px solid rgba(${r},${g},${b},0.28)`
    }
}

export const getColorGradientSolid = (color: string): ColorGradientStyle => {
    const [r, g, b] = getRgb(color)
    if (isNeutral(color)) {
        return { background: '#202020', border: '1px solid #2a2a2a' }
    }
    return {
        background: `rgba(${r},${g},${b},0.12)`,
        border: `1px solid rgba(${r},${g},${b},0.3)`
    }
}
