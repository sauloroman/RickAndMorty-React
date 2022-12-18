import { useDispatch, useSelector } from "react-redux";
import { setSelectedCharacter } from "../../store/slices/selectedCharacter.slice";
import styled from "@emotion/styled";

const CharactersCardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 15px;
  padding: 1.2rem;
  cursor: pointer;
  position: relative;
  transition: all .3s;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.095);
  background-color: #fff;;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
  }
`;

const ImageCharacterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

const ImageCharacter = styled.img`
  width: 100%;
  border-radius: 15px;
`;

const CharacterName = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0.75rem;
  color: #424250;
`;

const CharacterId = styled.span`
  text-align: right;
  font-size: 1.2rem;
  font-weight: 300;
  display: block;
`;

export const CharactersCard = ({ id, name, image }) => {

  const dispatch = useDispatch(); 

  const characters = useSelector( store => store.characters );

  const onSetSelectedCharacter = () => {
    const position = characters.findIndex( character => character.id === id );
    dispatch( setSelectedCharacter( characters[position] ) );
  }

  return (
    <CharactersCardContainer 
      className="animate__animated animate__fadeIn"
      onClick={ onSetSelectedCharacter }>
      <ImageCharacterContainer>
        <ImageCharacter src={image} alt={name} />
      </ImageCharacterContainer>

      <CharacterName>{name}</CharacterName>
      <CharacterId>#{id}</CharacterId>
    </CharactersCardContainer>
  );
};
