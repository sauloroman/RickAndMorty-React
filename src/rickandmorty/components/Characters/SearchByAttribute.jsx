import styled from "@emotion/styled"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCharacters } from "../../../store/slices/characters.slice";
import { setPagination } from "../../../store/slices/pagination.slice";
import { setSearchProperty } from "../../../store/slices/search.slice";
import { useFetch, useForm } from "../../hooks";


const SearchByAttributeContainer = styled.div`
  margin-bottom: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8rem;
  padding: 1rem 0;
`;

const SearchByAttributeField = styled.div`
  display: flex;
  flex-direction: column;
`;

const SearchByAttributeLabel = styled.label`
  font-size: 1.4rem;
  font-weight: 500;
  display: block;
  margin-bottom: .5rem;
`;

const SearchByAttributeSelect = styled.select`
  font-size: 1.4rem;
  border: 1px solid #ddd;
  border-radius: 100px;
  padding: .5rem;
  max-width: 100%;
`;

const SearchByAttributeOption = styled.option`
  font-weight: bold;
`;

export const SearchByAttribute = () => {

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
    <SearchByAttributeContainer>
      
      <SearchByAttributeField>
        <SearchByAttributeLabel>Status</SearchByAttributeLabel>
        <SearchByAttributeSelect name="status" value={ status } onChange={ onInputChange }>
          <SearchByAttributeOption value=''>Select a status</SearchByAttributeOption>
          <SearchByAttributeOption value='alive'>alive</SearchByAttributeOption>
          <SearchByAttributeOption value='dead'>dead</SearchByAttributeOption>
          <SearchByAttributeOption value='unknown'>unknown</SearchByAttributeOption>
        </SearchByAttributeSelect>
      </SearchByAttributeField>

      <SearchByAttributeField>
        <SearchByAttributeLabel>Species</SearchByAttributeLabel>
        <SearchByAttributeSelect  name="species" value={ species } onChange={ onInputChange }>
          <SearchByAttributeOption value=''>Select a specie</SearchByAttributeOption>
          <SearchByAttributeOption value='human'>human</SearchByAttributeOption>
          <SearchByAttributeOption value='alien'>alien</SearchByAttributeOption>
          <SearchByAttributeOption value='humanoid'>humanoid</SearchByAttributeOption>
          <SearchByAttributeOption value='poopybutthole'>poopybutthole</SearchByAttributeOption>
          <SearchByAttributeOption value='mythological'>mythological</SearchByAttributeOption>
          <SearchByAttributeOption value='unknown'>unknown</SearchByAttributeOption>
          <SearchByAttributeOption value='animal'>animal</SearchByAttributeOption>
          <SearchByAttributeOption value='disease'>disease</SearchByAttributeOption>
          <SearchByAttributeOption value='robot'>robot</SearchByAttributeOption>
          <SearchByAttributeOption value='cronenberg'>cronenberg</SearchByAttributeOption>
          <SearchByAttributeOption value='planet'>planet</SearchByAttributeOption>
        </SearchByAttributeSelect>
      </SearchByAttributeField>

      <SearchByAttributeField>
        <SearchByAttributeLabel>Gender</SearchByAttributeLabel>
        <SearchByAttributeSelect  name="gender" value={ gender } onChange={ onInputChange }>
          <SearchByAttributeOption value=''>Select a gender</SearchByAttributeOption>
          <SearchByAttributeOption value='female'>female</SearchByAttributeOption>
          <SearchByAttributeOption value='male'>male</SearchByAttributeOption>
          <SearchByAttributeOption value='genderless'>genderless</SearchByAttributeOption>
          <SearchByAttributeOption value='unknown'>unknown</SearchByAttributeOption>
        </SearchByAttributeSelect>
      </SearchByAttributeField>

    </SearchByAttributeContainer>
  )
}
