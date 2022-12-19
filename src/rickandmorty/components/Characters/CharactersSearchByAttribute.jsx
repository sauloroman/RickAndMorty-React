import styled from "@emotion/styled"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCharacters } from "../../../store/slices/characters.slice";
import { setPagination } from "../../../store/slices/pagination.slice";
import { setSearchProperty } from "../../../store/slices/search.slice";
import { useFetch, useForm } from "../../hooks";

const CharactersSearchByAttributeContainer = styled.div`
  margin-bottom: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8rem;
  padding: 1rem 0;
`;

const CharactersSearchByAttributeField = styled.div`
  display: flex;
  flex-direction: column;
`;

const CharactersSearchByAttributeLabel = styled.label`
  font-size: 1.4rem;
  font-weight: 500;
  display: block;
  margin-bottom: .5rem;
`;

const CharactersSearchByAttributeSelect = styled.select`
  font-size: 1.4rem;
  border: 1px solid #ddd;
  border-radius: 100px;
  padding: 1rem;
  max-width: 100%;
`;

const CharactersSearchByAttributeOption = styled.option`
  font-weight: bold;
`;

export const CharactersSearchByAttribute = () => {

  const dispatch = useDispatch();
  const { name } = useSelector( store => store.search );
  const [urlToSearch, setUrlToSearch] = useState('https://rickandmortyapi.com/api/character');
  const { data } = useFetch( urlToSearch );

  const { status, species, gender, onInputChange, onResetForm } = useForm({
    status: '',
    species: '',
    gender: ''
  })

  useEffect( () => {
    onResetForm();

    if ( name ) {
      setUrlToSearch(`https://rickandmortyapi.com/api/character?name=${name}`);
    } else {
      setUrlToSearch('https://rickandmortyapi.com/api/character');
    }
  }, [name]);

  useEffect( () => {

    dispatch( setSearchProperty({ property: 'status', value: status }));
    dispatch( setSearchProperty({ property: 'species', value: species }));
    dispatch( setSearchProperty({ property: 'gender', value: gender }));

    let finalString = ''; 

    if ( name ) {
      setUrlToSearch(`https://rickandmortyapi.com/api/character?name=${name}`);
    } else {
      setUrlToSearch(`https://rickandmortyapi.com/api/character?`);
    }

    if( status.length ) finalString += `&status=${status}`;
    if( species.length ) finalString += `&species=${species}`;
    if( gender.length ) finalString += `&gender=${gender}`;
    
    setUrlToSearch( urlToSearch => urlToSearch + finalString );

  }, [status, species, gender ] );

  useEffect( () => {
    if ( data?.error ) {
      dispatch( setCharacters([]));
      dispatch( setPagination({}) );
    } else {
      dispatch( setCharacters( data?.results ) );
      dispatch( setPagination( data?.info ) )
    }
  }, [ data ]);

  return (
    <CharactersSearchByAttributeContainer>
      
      <CharactersSearchByAttributeField>
        <CharactersSearchByAttributeLabel>Status</CharactersSearchByAttributeLabel>
        <CharactersSearchByAttributeSelect name="status" value={ status } onChange={ onInputChange }>
          <CharactersSearchByAttributeOption value=''>Select a status</CharactersSearchByAttributeOption>
          <CharactersSearchByAttributeOption value='alive'>alive</CharactersSearchByAttributeOption>
          <CharactersSearchByAttributeOption value='dead'>dead</CharactersSearchByAttributeOption>
          <CharactersSearchByAttributeOption value='unknown'>unknown</CharactersSearchByAttributeOption>
        </CharactersSearchByAttributeSelect>
      </CharactersSearchByAttributeField>

      <CharactersSearchByAttributeField>
        <CharactersSearchByAttributeLabel>Species</CharactersSearchByAttributeLabel>
        <CharactersSearchByAttributeSelect  name="species" value={ species } onChange={ onInputChange }>
          <CharactersSearchByAttributeOption value=''>Select a specie</CharactersSearchByAttributeOption>
          <CharactersSearchByAttributeOption value='human'>human</CharactersSearchByAttributeOption>
          <CharactersSearchByAttributeOption value='alien'>alien</CharactersSearchByAttributeOption>
          <CharactersSearchByAttributeOption value='humanoid'>humanoid</CharactersSearchByAttributeOption>
          <CharactersSearchByAttributeOption value='poopybutthole'>poopybutthole</CharactersSearchByAttributeOption>
          <CharactersSearchByAttributeOption value='mythological'>mythological</CharactersSearchByAttributeOption>
          <CharactersSearchByAttributeOption value='unknown'>unknown</CharactersSearchByAttributeOption>
          <CharactersSearchByAttributeOption value='animal'>animal</CharactersSearchByAttributeOption>
          <CharactersSearchByAttributeOption value='disease'>disease</CharactersSearchByAttributeOption>
          <CharactersSearchByAttributeOption value='robot'>robot</CharactersSearchByAttributeOption>
          <CharactersSearchByAttributeOption value='cronenberg'>cronenberg</CharactersSearchByAttributeOption>
          <CharactersSearchByAttributeOption value='planet'>planet</CharactersSearchByAttributeOption>
        </CharactersSearchByAttributeSelect>
      </CharactersSearchByAttributeField>

      <CharactersSearchByAttributeField>
        <CharactersSearchByAttributeLabel>Gender</CharactersSearchByAttributeLabel>
        <CharactersSearchByAttributeSelect  name="gender" value={ gender } onChange={ onInputChange }>
          <CharactersSearchByAttributeOption value=''>Select a gender</CharactersSearchByAttributeOption>
          <CharactersSearchByAttributeOption value='female'>female</CharactersSearchByAttributeOption>
          <CharactersSearchByAttributeOption value='male'>male</CharactersSearchByAttributeOption>
          <CharactersSearchByAttributeOption value='genderless'>genderless</CharactersSearchByAttributeOption>
          <CharactersSearchByAttributeOption value='unknown'>unknown</CharactersSearchByAttributeOption>
        </CharactersSearchByAttributeSelect>
      </CharactersSearchByAttributeField>

    </CharactersSearchByAttributeContainer>
  )
}
