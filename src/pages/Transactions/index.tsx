import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { TransactionsTable } from '../../components/TransactionsTable'
import { SearchTransactions } from './components/SearchTransactions'

import { TransactionsContainer } from './styles'

export function Transactions() {
  return (
    <div>
      <Header />

      <Summary />

      <TransactionsContainer>
        <SearchTransactions />

        <TransactionsTable />
      </TransactionsContainer>
    </div>
  )
}
