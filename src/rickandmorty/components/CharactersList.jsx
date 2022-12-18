import styled from "@emotion/styled";
import { useSelector } from "react-redux"
import { CharactersCard } from "./";

const CharactersListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
  margin-bottom: 5rem;
`;

export const CharactersList = () => {

  const characters = useSelector( store => store.characters );

  return (
    <CharactersListContainer>
      {
        characters.length 
        ? (
          
            characters?.map( character => (
              <CharactersCard key={ character.id } { ...character } />
            ))
          
        )
        : (<p>No hay resultados :/</p>)
      }
      
    </CharactersListContainer>
  )
}
