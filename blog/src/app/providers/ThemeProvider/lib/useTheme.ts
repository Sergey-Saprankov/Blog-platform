import { useContext } from 'react'

import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
  ThemeContextType,
} from 'app/providers/ThemeProvider/lib/ThemeContext'

export type UseThemeType = {
  toggleTheme: () => void
  theme: Theme
}

export const useTheme = (): UseThemeType => {
  const { theme, setTheme } = useContext<ThemeContextType>(ThemeContext)
  const toggleTheme = () => {
    const currentTheme = theme === Theme.Light ? Theme.Dark : Theme.Light

    setTheme(currentTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, currentTheme)
  }

  return { theme, toggleTheme }
}
