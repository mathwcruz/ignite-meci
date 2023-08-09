import { MagnifyingGlass } from "phosphor-react";

import { SearchTransactionContainer } from "./styles";

export function SearchTransaction() {
  return (
    <SearchTransactionContainer>
      <input type="text" placeholder="Search for transactions" />

      <button type="submit">
        <MagnifyingGlass size={20} />
        Search
      </button>
    </SearchTransactionContainer>
  );
}
