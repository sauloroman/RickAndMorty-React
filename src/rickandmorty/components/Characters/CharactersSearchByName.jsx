import styled from "@emotion/styled"
import { useDispatch } from "react-redux";
import SearchIcon from '@mui/icons-material/Search';
import { useForm } from "../../hooks";
import { setSearchProperty } from "../../../store/slices/search.slice";

const CharactersSearchByNameContainer = styled.div`
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

const CharactersSearchByNameForm = styled.form`
  width: 100%;
`;

const CharactersSearchByNameInput = styled.input`
  width: 100%;
  padding: 1.25rem;
  font-size: 1.6rem;
`;

export const CharactersSearchByName = () => {

  const dispatch = useDispatch();

  const { characterName, onInputChange } = useForm({
    characterName: ''
  });

  const onSearchCharacter = (e) => {
    e.preventDefault();
    dispatch( setSearchProperty({ property: 'name', value: characterName}) );
  }

  return (
    <CharactersSearchByNameContainer>
      <SearchIcon />
      <CharactersSearchByNameForm onSubmit={ onSearchCharacter }>
        <CharactersSearchByNameInput 
          name="characterName"
          placeholder="Search a character"
          value={characterName}
          onChange={ onInputChange }
        />
      </CharactersSearchByNameForm>
    </CharactersSearchByNameContainer>
  )
}
