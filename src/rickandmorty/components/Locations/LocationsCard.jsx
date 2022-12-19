import { useDispatch } from "react-redux";
import { setSelectedCharacter } from "../../../store/slices/selectedCharacter.slice";
import { useFetch } from "../../hooks"
import { 
  ComponentCardCharacterContainer, 
  ComponentCardCharacterId, 
  ComponentCardCharacterImage, 
  ComponentCardCharacterImageContainer, 
  ComponentCardCharacterInfo, 
  ComponentCardCharacterName, 
  ComponentCardCharacterStatus } from "../Common"

export const LocationsCard = ({ url }) => {

  const dispatch = useDispatch();

  const { data } = useFetch( url );

  const finalStatus =  data?.status == 'Alive' 
                      ? 'alive' 
                      : data?.status === 'Dead' ? 'dead' : 'unknown'

  const onSelectCharacterCard = () => {
    dispatch( setSelectedCharacter( data ) );
  }

  return (
    <ComponentCardCharacterContainer 
    className="animate__animated animate__fadeIn"
    onClick={ onSelectCharacterCard }>
      <ComponentCardCharacterImageContainer>
        <ComponentCardCharacterImage src={data?.image} alt={data?.name} />
      </ComponentCardCharacterImageContainer>

      <ComponentCardCharacterName>{data?.name}</ComponentCardCharacterName>

      <ComponentCardCharacterInfo>
        <ComponentCardCharacterStatus className={finalStatus}></ComponentCardCharacterStatus>
        <ComponentCardCharacterId>#{data?.id}</ComponentCardCharacterId>
      </ComponentCardCharacterInfo>
    </ComponentCardCharacterContainer>
  )
}
