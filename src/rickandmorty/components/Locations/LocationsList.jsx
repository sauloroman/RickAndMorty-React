import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLocationProperty } from "../../../store/slices/location.slice";
import { useForm } from "../../hooks";
import { ComponentSelectField, ComponentSelectOption, ComponentSelectSelectElement } from "../Common";

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
    <ComponentSelectField>
      <ComponentSelectSelectElement 
        value={locationSelected} 
        name='locationSelected' 
        onChange={onInputChange} 
        style={{ width: '50%', marginBottom: '2rem'}}
      >
        <ComponentSelectOption>Choose one location</ComponentSelectOption>
        {
          locationsAmount.map( locationNumber => (
            <ComponentSelectOption 
              key={ locationNumber }
              value={locationNumber}>Location {locationNumber}</ComponentSelectOption>
          ))
        }
      </ComponentSelectSelectElement>
    </ComponentSelectField>
  )
}
