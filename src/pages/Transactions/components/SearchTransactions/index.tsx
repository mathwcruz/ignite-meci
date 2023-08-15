import { MagnifyingGlass } from 'phosphor-react'
import { useContextSelector } from 'use-context-selector'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { TransactionsContext } from '../../../../contexts/TransactionsContext'

import { SearchTransactionsContainer } from './styles'

const searchTransactionsSchema = z.object({
  query: z.string(),
})

type SearchTransactionsInputs = z.infer<typeof searchTransactionsSchema>

export function SearchTransactions() {
  const getTransactions = useContextSelector(TransactionsContext, (context) => {
    return context.getTransactions
  })

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchTransactionsInputs>({
    resolver: zodResolver(searchTransactionsSchema),
  })

  async function handleSearchTransactions(data: SearchTransactionsInputs) {
    await getTransactions(data?.query)
  }

  return (
    <SearchTransactionsContainer
      onSubmit={handleSubmit(handleSearchTransactions)}
    >
      <input
        type="text"
        placeholder="Search for transactions"
        {...register('query')}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Search
      </button>
    </SearchTransactionsContainer>
  )
}
