import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background-color: ${(props) => props.theme["gray-800"]};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border-radius: 6px;
      border: 0;
      background-color: ${(props) => props.theme["gray-900"]};
      color: ${(props) => props.theme["gray-300"]};
      padding: 1rem;

      &::placeholder {
        color: ${(props) => props.theme["gray-500"]};
      }
    }

    button[type="submit"] {
      height: 3.625rem;
      border: 0;
      background-color: ${(props) => props.theme["green-500"]};
      color: ${(props) => props.theme.white};
      font-weight: bold;
      padding: 0 1.25rem;
      border-radius: 6px;
      margin-top: 1.5rem;

      &:hover {
        background-color: ${(props) => props.theme["green-700"]};
        transition: background-color 0.2s;
      }
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  background-color: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  color: ${(props) => props.theme["gray-500"]};

  &:hover {
    color: ${(props) => props.theme["gray-400"]};
    transition: color 0.2s;
  }
`;

export const TransactionTypesContainer = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`;

interface TransactionTypeOptionProps {
  variant: "deposit" | "withdrawal";
}

export const TransactionTypeOption = styled(
  RadioGroup.Item
)<TransactionTypeOptionProps>`
  background-color: ${(props) => props.theme["gray-700"]};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 6px;
  border: 0;
  color: ${(props) => props.theme["gray-300"]};

  &[data-state="checked"] {
    color: ${(props) => props.theme.white};
    background-color: ${(props) =>
      props.variant === "deposit"
        ? props.theme["green-500"]
        : props.theme["red-500"]};

    svg {
      color: ${(props) => props.theme.white};
    }
  }

  &[data-state="checked"]:hover {
    background-color: ${(props) => props.theme["gray-600"]};
    transition: background-color 0.2s;
  }

  &:focus {
    box-shadow: 0 0 0 2px
      ${(props) =>
        props.variant === "deposit"
          ? props.theme["green-500"]
          : props.theme["red-500"]};
  }

  svg {
    color: ${(props) =>
      props.variant === "deposit"
        ? props.theme["green-300"]
        : props.theme["red-300"]};
  }
`;
