import styled from "@emotion/styled"
import { useDispatch } from "react-redux";
import { setCharacters } from "../../store/slices/characters.slice";
import { setPagination } from "../../store/slices/pagination.slice";
import { useFetch, useForm } from "../hooks";
import SearchIcon from '@mui/icons-material/Search';

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

  const { data } = useFetch( `https://rickandmortyapi.com/api/character?name=${characterName}` );

  const onSearchCharacter = (e) => {
    e.preventDefault();
    
    if ( !data.error ) {
      dispatch( setCharacters( data?.results ) );
      dispatch( setPagination( data?.info ) )
    } else {
      dispatch( setCharacters([]));
    }
  
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
