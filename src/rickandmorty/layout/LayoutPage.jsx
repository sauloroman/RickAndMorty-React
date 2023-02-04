import { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "@emotion/styled"
import { CharactersSelectedCard, ComponentPageTitle } from "../components";
import { MenuButton, Sidebar } from "../../ui/components";
import { changeTheme } from "../helpers";

const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 55% 25%;

  @media ( max-width: 900px ) {
    grid-template-columns: 1fr;
    position: relative;
  }
`;

const PageContainer = styled.div`
  padding: 5rem 8rem;

  @media ( max-width: 900px ) {
    padding: 3rem;
    width: 95%;
  }
`

export const LayoutPage = ({ children, title }) => {

  const selectedCharacter = useSelector( store => store.selectedCharacter );
  const favorites = useSelector( store => store.favorites );
  const theme = useSelector( store => store.theme );
  const { displayName } = useSelector( store => store.auth );

  useEffect( () => {
    localStorage.setItem('selectedCharacter', JSON.stringify( selectedCharacter ) );
  }, [selectedCharacter] );

  useEffect( () => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect( () => {
    localStorage.setItem('theme', theme );
    changeTheme(theme);
  }, [ theme ]);

  return (
    <LayoutContainer>
      <Sidebar />

      <PageContainer>
        <ComponentPageTitle>{title} | {displayName}</ComponentPageTitle>
        {children}
      </PageContainer>

      <CharactersSelectedCard />

      <MenuButton />
    </LayoutContainer>
  )
}
