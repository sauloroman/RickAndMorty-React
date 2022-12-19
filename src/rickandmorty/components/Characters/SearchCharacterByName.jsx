import styled from "@emotion/styled"
import { useDispatch } from "react-redux";
import SearchIcon from '@mui/icons-material/Search';
import { useForm } from "../../hooks";
import { setSearchProperty } from "../../../store/slices/search.slice";

const SearchCharacterByNameContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 100px;
  padding: 0 3rem;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  gap: 2rem;

  svg {
    font-size: 2.5rem;
  }
`;

const FormSearch = styled.form`
  width: 100%;
`;

const InputSearch = styled.input`
  width: 100%;
  padding: 1.25rem;
  font-size: 1.6rem;
`;

export const SearchCharacterByName = () => {

  const dispatch = useDispatch();

  const { characterName, onInputChange } = useForm({
    characterName: ''
  });

  const onSearchCharacter = (e) => {
    e.preventDefault();
    dispatch( setSearchProperty({ property: 'name', value: characterName}) );
  }

  return (
    <SearchCharacterByNameContainer>
      <SearchIcon />

      <FormSearch onSubmit={ onSearchCharacter }>
        <InputSearch 
          name="characterName"
          placeholder="Search a character"
          value={characterName}
          onChange={ onInputChange }
        />
      </FormSearch>
    </SearchCharacterByNameContainer>
  )
}
