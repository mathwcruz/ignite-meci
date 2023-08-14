export interface Transaction {
  id: number;
  description: string;
  type: "deposit" | "withdrawal";
  category: string;
  price: number;
  createdAt: string;
}

export interface CreateTransactionInputsData {
  description: string;
  type: "deposit" | "withdrawal";
  category: string;
  price: number;
}
