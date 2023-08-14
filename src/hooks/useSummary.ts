import { useTransactions } from "./useTransactions";
import { Transaction } from "../interfaces/transaction";

interface Transactionsummary {
  deposits: number;
  withdrawals: number;
  total: number;
}

export function useSummary() {
  const { transactions } = useTransactions();

  const summary: Transactionsummary = transactions?.reduce(
    (acc: Transactionsummary, transaction: Transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.price;
        acc.total += transaction.price;
      } else {
        acc.withdrawals += transaction.price;
        acc.total -= transaction.price;
      }

      return acc;
    },
    {
      deposits: 0,
      withdrawals: 0,
      total: 0,
    }
  );

  return summary;
}
