import { PaletteType, ThemeProvider } from '@material-ui/core'
import { createContext, ReactElement, ReactNode, useContext, useState } from 'react'
import theme from '../theme'
interface IThemeProvider {
  type: PaletteType
  setTheme: (state: PaletteType) => any
  toggleTheme: () => any
}
const defaultTheme: PaletteType = 'light'
const ThemeContext = createContext<IThemeProvider | undefined>(undefined)
type PropsContainer = {
  children: ReactNode
}

const useThemeState = (): IThemeProvider | undefined => useContext(ThemeContext)

const ThemeContainer = ({ children }: PropsContainer): ReactElement => {
  const [type, setTheme] = useState<PaletteType>(defaultTheme)

  const toggleTheme = () => {
    setTheme(type === 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeContext.Provider value={{ type, setTheme, toggleTheme }}>
      <ThemeProvider theme={theme(type)}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

export { ThemeContainer, useThemeState }
