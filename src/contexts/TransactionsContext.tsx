import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'

import {
  Transaction,
  CreateTransactionInputsData,
} from '../interfaces/transaction'
import { api } from '../services/api'

interface TransactionsContextData {
  transactions: Transaction[]
  getTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionInputsData) => Promise<void>
}

export const TransactionsContext = createContext({} as TransactionsContextData)

interface TransactionsContextProviderProps {
  children: ReactNode
}

export function TransactionsContextProvider({
  children,
}: TransactionsContextProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const getTransactions = useCallback(async (query?: string) => {
    const { data } = await api.get<Transaction[]>('transactions', {
      params: { _sort: 'createdAt', _order: 'desc', q: query },
    })

    setTransactions(data)
  }, [])

  const createTransaction = useCallback(
    async (data: CreateTransactionInputsData) => {
      const { description, price, category, type } = data

      const response = await api.post('transactions', {
        description,
        price,
        category,
        type,
        createdAt: new Date(),
      })

      setTransactions((old) => [response.data, ...old])
    },
    [],
  )

  useEffect(() => {
    getTransactions()
  }, [getTransactions])

  return (
    <TransactionsContext.Provider
      value={{ transactions, getTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
