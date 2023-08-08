import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react";

import { SummaryCard, SummaryContainer } from "./styles";

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard type="deposits">
        <header>
          <span>Deposits</span>
          <ArrowCircleUp size={32} />
        </header>

        <strong>$ 3,525</strong>
      </SummaryCard>

      <SummaryCard type="withdrawals">
        <header>
          <span>Withdrawals</span>
          <ArrowCircleDown size={32} />
        </header>

        <strong>$ 255</strong>
      </SummaryCard>

      <SummaryCard type="total">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} />
        </header>

        <strong>$ 3,270</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
