import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'
import { useContextSelector } from 'use-context-selector'
import { useForm, Controller } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  Overlay,
  Content,
  CloseButton,
  TransactionTypesContainer,
  TransactionTypeOption,
} from './styles'
import { TransactionsContext } from '../../contexts/TransactionsContext'

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number().positive(),
  category: z.string(),
  type: z.enum(['withdrawal', 'deposit']),
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

interface NewTransactionModalProps {
  onAfterCreateTransaction: () => void
}

export function NewTransactionModal({
  onAfterCreateTransaction,
}: NewTransactionModalProps) {
  const createTransaction = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.createTransaction
    },
  )

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: 'deposit',
    },
  })

  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    await createTransaction(data)

    reset()

    onAfterCreateTransaction()
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Close asChild>
          <CloseButton>
            <X size={24} />
          </CloseButton>
        </Dialog.Close>

        <Dialog.Title>New transaction</Dialog.Title>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder="Description"
            required
            {...register('description')}
          />
          <input
            type="number"
            placeholder="Price"
            required
            {...register('price', { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Category"
            required
            {...register('category')}
          />

          <Controller
            control={control}
            name="type"
            render={({ field: { onChange, value } }) => (
              <TransactionTypesContainer onValueChange={onChange} value={value}>
                <TransactionTypeOption variant="deposit" value="deposit">
                  <ArrowCircleUp size={24} />
                  Deposit
                </TransactionTypeOption>

                <TransactionTypeOption variant="withdrawal" value="withdrawal">
                  <ArrowCircleDown size={24} />
                  Withdrawal
                </TransactionTypeOption>
              </TransactionTypesContainer>
            )}
          />

          <button type="submit" disabled={isSubmitting}>
            Register
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
