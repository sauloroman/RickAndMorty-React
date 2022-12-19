import { useSelector } from "react-redux";
import { ComponentCardCharacter, ComponentList } from "../Common";
import { LocationEmpty } from "./";

export const LocationsGrid = () => {

  const { information } = useSelector( store => store.location );
  
  return (
    <>
      {
        information?.residents.length
        ? (
          <ComponentList>
            {information?.residents.map( residentUrl => (
              <ComponentCardCharacter key={residentUrl} url={residentUrl} />
            ))}
          </ComponentList>
        )
        : ( <LocationEmpty /> )
      }
    </>
  )
}
