import { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "@emotion/styled"
import { CharactersSelectedCard, ComponentPageTitle } from "../components";

const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
`;

const PageContainer = styled.div`
  padding: 5rem 8rem;
`

export const LayoutPage = ({ children, title }) => {

  const selectedCharacter = useSelector( store => store.selectedCharacter );
  const favorites = useSelector( store => store.favorites );

  useEffect( () => {
    localStorage.setItem('selectedCharacter', JSON.stringify( selectedCharacter ) );
  }, [selectedCharacter] );

  useEffect( () => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites])

  return (
    <LayoutContainer>
      <PageContainer>
      <ComponentPageTitle>{title}</ComponentPageTitle>
        {children}
      </PageContainer>
      <CharactersSelectedCard />
    </LayoutContainer>
  )
}
