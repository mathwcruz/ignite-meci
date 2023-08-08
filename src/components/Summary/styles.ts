import styled, { css } from "styled-components";

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -5rem;
`;

interface SummaryCardProps {
  type: "deposits" | "withdrawals" | "total";
}

const SUMMARY_CARD_ICON_COLORS = {
  deposits: "green-300",
  withdrawals: "red-300",
  total: "white"
} as const

export const SummaryCard = styled.div<SummaryCardProps>`
  background-color: ${(props) => props.theme["gray-600"]};
  border-radius: 6px;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      color: ${(props) => props.theme["gray-300"]};
    }

    svg {
      color: ${(props) => props.theme[SUMMARY_CARD_ICON_COLORS[props.type]]};
    }
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  ${(props) =>
    props.type === "total" &&
    css`
      background-color: ${props.theme["green-700"]};
    `}
`;
