import { SimplePaletteColorOptions, lighten } from '@material-ui/core'

export const primary: SimplePaletteColorOptions = {
  main: '#7047EB',
  dark: '#482E97',
  light: '#B29BF4',
}

export const secondary: SimplePaletteColorOptions = {
  main: '#FFCB11',
  dark: '#A4830B',
  light: '#FFE37E',
}

export const common = {
  black: '#333',
  white: '#fff',
}

export const success: SimplePaletteColorOptions = {
  main: '#3CC13B',
  light: lighten('#3CC13B', 0.9),
}
export const warning: SimplePaletteColorOptions = {
  main: '#F3BB1C',
  light: lighten('#F3BB1C', 0.9),
}
export const error: SimplePaletteColorOptions = {
  main: '#f44444',
  light: lighten('#f44444', 0.9),
}
export const info: SimplePaletteColorOptions = {
  main: '#3CC13B',
  light: lighten('#3CC13B', 0.9),
}
export const primaryGradient = `linear-gradient(45deg, ${primary.main} 30%, ${secondary.main}  90%)`
