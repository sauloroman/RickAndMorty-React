import { useForm, useList } from "../../hooks";
import { ComponentSelectField, ComponentSelectOption, ComponentSelectSelectElement } from "../Common";

export const LocationsList = () => {

  const { locationSelected, onInputChange } = useForm({
    locationSelected: ''
  });

  const { arrayAmount } = useList( 'locationSelected', locationSelected, 125 );

  return (
    <ComponentSelectField>
      <ComponentSelectSelectElement 
        value={locationSelected} 
        name='locationSelected' 
        onChange={onInputChange} 
        style={{ width: '50%', marginBottom: '2rem'}}
      >
        <ComponentSelectOption value={1}>Choose one location</ComponentSelectOption>
        {
          arrayAmount.map( locationNumber => (
            <ComponentSelectOption 
              key={ locationNumber }
              value={locationNumber}>Location {locationNumber}</ComponentSelectOption>
          ))
        }
      </ComponentSelectSelectElement>
    </ComponentSelectField>
  )
}
