import { useSelector } from "react-redux"
import { ComponentCardCharacter, ComponentList } from "../Common"
import { LocationEmpty } from "../Locations"

export const EpisodesGrid = () => {

  const { information } = useSelector( store => store.episode )

  return (
    <>
      {
        information?.characters.length
        ? (
          <ComponentList>
            {information?.characters.map( charactersUrl => (
              <ComponentCardCharacter key={charactersUrl} url={charactersUrl} />
            ))}
          </ComponentList>
        )
        : ( <LocationEmpty /> )
      }
    </>
  )
}
