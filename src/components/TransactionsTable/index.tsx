import { useContextSelector } from 'use-context-selector'

import { TransactionsContext } from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'

import { TransactionsTable as Table, PriceHighlight } from './styles'

export function TransactionsTable() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  return (
    <Table>
      <tbody>
        {transactions?.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.description}</td>
            <td>
              <PriceHighlight variant={transaction.type}>
                {transaction.type === 'withdrawal' && '- '}
                {priceFormatter.format(transaction.price)}
              </PriceHighlight>
            </td>
            <td>{transaction.category}</td>
            <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
