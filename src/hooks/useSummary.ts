import { useMemo } from 'react'
import { useContextSelector } from 'use-context-selector'

import { TransactionsContext } from '../contexts/TransactionsContext'
import { Transaction } from '../interfaces/transaction'

interface TransactionsSummary {
  deposits: number
  withdrawals: number
  total: number
}

export function useSummary() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  const summary: TransactionsSummary = useMemo(() => {
    return transactions?.reduce(
      (acc: TransactionsSummary, transaction: Transaction) => {
        if (transaction.type === 'deposit') {
          acc.deposits += transaction.price
          acc.total += transaction.price
        } else {
          acc.withdrawals += transaction.price
          acc.total -= transaction.price
        }

        return acc
      },
      {
        deposits: 0,
        withdrawals: 0,
        total: 0,
      },
    )
  }, [transactions])

  return summary
}
