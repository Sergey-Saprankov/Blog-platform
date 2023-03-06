import { createContext } from 'react'

export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

export type ThemeContextType = {
  theme?: Theme
  setTheme?: (them: Theme) => void
}

export const ThemeContext = createContext<ThemeContextType>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme'
