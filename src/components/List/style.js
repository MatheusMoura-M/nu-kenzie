import styled from "styled-components";

export const BtnAll = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-family);
  font-size: var(--fontSize-text-2);
  font-weight: var(--fontWei-title-4);
  color: ${({ color }) => color};
  width: 70px;
  border-radius: 0.4rem;
  background-color: ${({ bg }) => bg};
  border: 1px solid transparent;
  transition: box-shadow 0.3s ease, transform 0.3s ease, background-color 0.5s,
    color 0.5s;

  :hover {
    border-color: var(--color-primary-2);
    box-shadow: 2px 2px 0 0.5px #550f4f;
    background-color: var(--color-primary-2);
    color: var(--grey-6);
    transform: scale(1.08);
  }

  :active {
    box-shadow: 0 0 0 0, inset 2px 2px 2px 0.5px #550f4f;
    transform: translate(2px, 2px);
  }
`;
