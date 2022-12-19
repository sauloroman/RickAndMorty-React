import { useSelector } from "react-redux";
import { ComponentList } from "../Common";
import { LocationEmpty, LocationsCard } from "./";

export const LocationsGrid = () => {

  const { information } = useSelector( store => store.location );
  
  return (
    <>
      {
        information?.residents.length
        ? (
          <ComponentList>
            {information?.residents.map( residentUrl => (
              <LocationsCard key={residentUrl} url={residentUrl} />
            ))}
          </ComponentList>
        )
        : ( <LocationEmpty /> )
      }
    </>
  )
}
