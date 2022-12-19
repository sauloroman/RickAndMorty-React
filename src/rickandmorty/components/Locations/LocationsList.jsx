import styled from "@emotion/styled";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLocationProperty } from "../../../store/slices/location.slice";
import { useForm } from "../../hooks";

const LocationsListContainer = styled.div`
  padding: 1rem 0;
  width: 100%;
  margin-bottom: 2rem;
`;

const LocationListSelect = styled.select`
  border: 1px solid #ddd;
  border-radius: 100px;
  padding: 1rem;
  width: 50%;
`;

const LocationListOption = styled.option`
  font-weight: 500;
`;

const locationsAmount = new Array(125).fill().map( (_, i) => i + 1 );

export const LocationsList = () => {

  const dispatch = useDispatch();

  const { locationSelected, onInputChange } = useForm({
    locationSelected: ''
  });

  useEffect( () => {
    dispatch( setLocationProperty({ property: 'locationNumber', value: locationSelected }) );
  }, [locationSelected])

  return (
    <LocationsListContainer>
      <LocationListSelect value={locationSelected} name='locationSelected' onChange={onInputChange} >
        <LocationListOption>Choose one location</LocationListOption>
        {
          locationsAmount.map( locationNumber => (
            <LocationListOption 
              key={ locationNumber }
              value={locationNumber}>Location {locationNumber}</LocationListOption>
          ))
        }
      </LocationListSelect>
    </LocationsListContainer>
  )
}
