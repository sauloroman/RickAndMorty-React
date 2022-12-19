import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { setLocationProperty } from "../../store/slices/location.slice";
import { LayoutPage } from "../layout"
import { LocationsGrid, LocationsInformation, LocationsList } from "../components"
import { Spinner } from "../../ui/components";
import { useFetch } from "../hooks";

export const LocationPage = () => {

  const dispatch = useDispatch();

  const { locationNumber } = useSelector( store => store.location );

  const { data, isLoading } = useFetch(`https://rickandmortyapi.com/api/location/${locationNumber}` );

  useEffect( () => {
    dispatch( setLocationProperty({ property: 'locationNumber', value: 1 }) )
  }, [])

  useEffect( () => {
    dispatch( setLocationProperty({ property: 'information', value: data }))
  }, [data]);

  return (
    <LayoutPage title='Locations'>
      <LocationsList />

      {
        isLoading 
        ? (<Spinner />)
        : (
          <>
            <LocationsInformation />
            <LocationsGrid />
          </>
        )
      }
    </LayoutPage>
  )
}
