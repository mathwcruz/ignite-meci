import { ThemeProvider } from 'styled-components'

import { TransactionsContextProvider } from './contexts/TransactionsContext'
import { Transactions } from './pages/Transactions'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <TransactionsContextProvider>
        <Transactions />
      </TransactionsContextProvider>
    </ThemeProvider>
  )
}
