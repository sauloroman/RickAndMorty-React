import styled from "@emotion/styled";

const ComponentList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
  margin-bottom: 5rem;

  @media ( max-width: 900px ) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export {
  ComponentList
}
