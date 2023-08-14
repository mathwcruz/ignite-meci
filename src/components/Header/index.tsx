import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import { NewTransactionModal } from '../NewTransactionModal'

import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import logo from '../../assets/logo.svg'

export function Header() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState<boolean>(false)

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="" />

        <Dialog.Root
          open={isNewTransactionModalOpen}
          onOpenChange={setIsNewTransactionModalOpen}
        >
          <Dialog.Trigger asChild>
            <NewTransactionButton>New transaction</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal
            onAfterCreateTransaction={() => setIsNewTransactionModalOpen(false)}
          />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
