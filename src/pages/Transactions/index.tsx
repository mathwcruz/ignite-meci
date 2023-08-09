import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsTable } from "../../components/TransactionsTable";
import { SearchTransaction } from "./components/SearchTransaction";

import { TransactionsContainer } from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />

      <Summary />

      <TransactionsContainer>
        <SearchTransaction />

        <TransactionsTable />
      </TransactionsContainer>
    </div>
  );
}
