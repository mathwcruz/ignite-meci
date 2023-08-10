import { createContext, ReactNode, useEffect, useState } from "react";

import { Transaction } from "../interfaces/transaction";
import { api } from "../services/api";

interface TransactionsContextData {
  transactions: Transaction[];
}

export const TransactionsContext = createContext({} as TransactionsContextData);

interface TransactionsContextProviderProps {
  children: ReactNode;
}

export function TransactionsContextProvider({
  children,
}: TransactionsContextProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function getTransactions() {
    const { data } = await api.get<Transaction[]>("transactions");

    setTransactions(data);
  }

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}
