import { useDispatch, useSelector } from "react-redux";
import { setSelectedCharacter } from "../../../store/slices/selectedCharacter.slice";
import { toggleSelectedCharacter } from "../../helpers";
import { 
  ComponentCardCharacterContainer, 
  ComponentCardCharacterId, 
  ComponentCardCharacterImage,
  ComponentCardCharacterImageContainer, 
  ComponentCardCharacterInfo, 
  ComponentCardCharacterName, 
  ComponentCardCharacterStatus } from "../Common";

export const CharactersCard = ({ id, name, image, status }) => {

  const dispatch = useDispatch(); 
  const characters = useSelector( store => store.characters );

  const onSetSelectedCharacter = ( id ) => {
    const position = characters.findIndex( character => character.id === id );
    dispatch( setSelectedCharacter( characters[position] ) );
    
    if ( !document.querySelector('.show-selected') ) {
      toggleSelectedCharacter();
    }

  }

  const finalStatus =  status == 'Alive' 
                      ? 'alive' 
                      : status === 'Dead' ? 'dead' : 'unknown'


  return (
    <ComponentCardCharacterContainer 
      className="animate__animated animate__fadeIn"
      onClick={ () => onSetSelectedCharacter( id ) }>
      <ComponentCardCharacterImageContainer>
        <ComponentCardCharacterImage src={image} alt={name} />
      </ComponentCardCharacterImageContainer>

      <ComponentCardCharacterName>{name}</ComponentCardCharacterName>

      <ComponentCardCharacterInfo>
        <ComponentCardCharacterStatus className={finalStatus}></ComponentCardCharacterStatus>
        <ComponentCardCharacterId>#{id}</ComponentCardCharacterId>
      </ComponentCardCharacterInfo>

    </ComponentCardCharacterContainer>
  );
};
