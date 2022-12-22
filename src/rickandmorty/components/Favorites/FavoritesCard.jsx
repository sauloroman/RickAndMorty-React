import { useDispatch } from "react-redux";
import { setSelectedCharacter } from "../../../store/slices/selectedCharacter.slice";
import { 
  ComponentCardCharacterContainer, 
  ComponentCardCharacterImage, 
  ComponentCardCharacterImageContainer } from "../Common"

export const FavoritesCard = ({ favorite}) => {

  const dispatch = useDispatch();

  const onSelectCharacterCard = () => {
    dispatch( setSelectedCharacter( favorite ) );
  }

  return (
    <ComponentCardCharacterContainer 
      className="animate__animated animate__fadeIn"
      onClick={ onSelectCharacterCard } 
      style={{ backgroundColor: `var( --button-favorite-color-tint)`}}>
      <ComponentCardCharacterImageContainer>
        <ComponentCardCharacterImage src={favorite?.image} alt={favorite?.name} />
      </ComponentCardCharacterImageContainer>
    </ComponentCardCharacterContainer>
  )
}
