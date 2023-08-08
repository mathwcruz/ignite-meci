import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsTable } from "../../components/TransactionsTable";

export function Transactions() {
  return (
    <div>
      <Header />

      <Summary />

      <TransactionsTable />
    </div>
  )
}