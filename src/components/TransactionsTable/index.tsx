import {
  TransactionsTableContainer,
  TransactionsTable as Table,
  PriceHighlight,
} from "./styles";

export function TransactionsTable() {
  return (
    <TransactionsTableContainer>
      <Table>
        <tbody>
          <tr>
            <td>Supermarket</td>
            <td>
              <PriceHighlight variant="withdrawal">- $ 34</PriceHighlight>
            </td>
            <td>Food</td>
            <td>08/21/2023</td>
          </tr>
          <tr>
            <td>Rent</td>
            <td>
              <PriceHighlight variant="deposit">$ 170</PriceHighlight>
            </td>
            <td>Extra income</td>
            <td>08/17/2023</td>
          </tr>
        </tbody>
      </Table>
    </TransactionsTableContainer>
  );
}
