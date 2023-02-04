import { useForm } from "../../../hooks";
import { useList } from "../../hooks";
import { 
  ComponentSelectField, 
  ComponentSelectOption, 
  ComponentSelectSelectElement } from "../Common";

export const EpisodesList = () => { 

  const { episodeSelected, onInputChange } = useForm({
    episodeSelected: ''
  });

  const {arrayAmount} = useList('episodeSelected', episodeSelected, 51);

  return (
    <ComponentSelectField>
      <ComponentSelectSelectElement
        value={episodeSelected} 
        name='episodeSelected' 
        onChange={onInputChange} 
        style={{ width: '50%', marginBottom: '2rem'}}
      >
        <ComponentSelectOption value={1}>Choose one episode</ComponentSelectOption>
        {
          arrayAmount.map( episodeNumber => (
            <ComponentSelectOption 
              key={ episodeNumber }
              value={episodeNumber}>Episode {episodeNumber}</ComponentSelectOption>
          ))
        }
      </ComponentSelectSelectElement>
    </ComponentSelectField>
  )
}
