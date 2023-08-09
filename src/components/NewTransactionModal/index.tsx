import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";

import {
  Overlay,
  Content,
  CloseButton,
  TransactionTypesContainer,
  TransactionTypeOption,
} from "./styles";

export function NewTransactionModal() {
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

        <form>
          <input type="text" placeholder="Description" required />
          <input type="number" placeholder="Price" required />
          <input type="text" placeholder="Category" required />

          <TransactionTypesContainer>
            <TransactionTypeOption variant="deposit" value="deposit">
              <ArrowCircleUp size={24} />
              Deposit
            </TransactionTypeOption>

            <TransactionTypeOption variant="withdrawal" value="withdrawal">
              <ArrowCircleDown size={24} />
              Withdrawal
            </TransactionTypeOption>
          </TransactionTypesContainer>

          <button type="submit">Register</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
