import styled from "@emotion/styled";

const ButtonFullElement = styled.button`
  background-color: var(--button-color);
  border-radius: 100px;
  padding: 1.5rem 1rem;
  color: #fff;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 700;
  width: 20rem;
  transition: all .3s;

  &:hover {
    background-color: var(--button-color-2);;
  }
`;

export const ButtonFull = ({ children }) => {
  return (
    <ButtonFullElement>{children}</ButtonFullElement>
  )
}
