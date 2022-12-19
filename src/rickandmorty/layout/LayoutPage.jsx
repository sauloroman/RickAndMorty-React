import styled from "@emotion/styled"
import { CharactersSelectedCard } from "../components";

const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
`;

const PageContainer = styled.div`
  padding: 5rem 8rem;
`

export const LayoutPage = ({ children }) => {
  return (
    <LayoutContainer>
      <PageContainer>
        {children}
      </PageContainer>
      <CharactersSelectedCard />
    </LayoutContainer>
  )
}
