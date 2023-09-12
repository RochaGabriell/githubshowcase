import { ThemeProvider, DefaultTheme } from 'styled-components'
import { Outlet } from 'react-router-dom'

import usePeristedState from '../../hooks/usePeristedState'
import light from '../../styles/themes/light'
import dark from '../../styles/themes/dark'

import GlobalStyle from '../../styles/GlobalStyles'

const Base = () => {

  const [theme, setTheme] = usePeristedState<DefaultTheme>('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Outlet />
    </ThemeProvider>
  )
}

export default Base