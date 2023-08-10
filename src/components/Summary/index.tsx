import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react";

import { useSummary } from "../../hooks/useSummary";
import { priceFormatter } from "../../utils/formatter";

import { SummaryCard, SummaryContainer } from "./styles";

export function Summary() {
  const summary = useSummary();

  return (
    <SummaryContainer>
      <SummaryCard type="deposits">
        <header>
          <span>Deposits</span>
          <ArrowCircleUp size={32} />
        </header>

        <strong>{priceFormatter.format(summary?.deposits)}</strong>
      </SummaryCard>

      <SummaryCard type="withdrawals">
        <header>
          <span>Withdrawals</span>
          <ArrowCircleDown size={32} />
        </header>

        <strong>{priceFormatter.format(summary?.withdrawals)}</strong>
      </SummaryCard>

      <SummaryCard type="total" amount={summary?.total}>
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} />
        </header>

        <strong>{priceFormatter.format(summary?.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
