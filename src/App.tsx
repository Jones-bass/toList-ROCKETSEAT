import { GlobalStyle } from './styles/themes/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { Header } from './components/Header'
import { Home } from './page'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <Home />
    </ThemeProvider>
  )
}
