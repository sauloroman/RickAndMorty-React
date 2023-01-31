import styled from "@emotion/styled"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCharacters } from "../../../store/slices/characters.slice";
import { setPagination } from "../../../store/slices/pagination.slice";
import { setSearchProperty } from "../../../store/slices/search.slice";
import { useFetch, useForm } from "../../hooks";
import { ComponentSelectField, ComponentSelectLabel, ComponentSelectOption, ComponentSelectSelectElement } from "../Common";

const CharactersSearchByAttributeContainer = styled.div`
  margin-bottom: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8rem;
  padding: 1rem 0;

  @media ( max-width: 900px ) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
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
      
      <ComponentSelectField>
        <ComponentSelectLabel>Status</ComponentSelectLabel>
        <ComponentSelectSelectElement name="status" value={ status } onChange={ onInputChange }>
          <ComponentSelectOption value=''>Select a status</ComponentSelectOption>
          <ComponentSelectOption value='alive'>alive</ComponentSelectOption>
          <ComponentSelectOption value='dead'>dead</ComponentSelectOption>
          <ComponentSelectOption value='unknown'>unknown</ComponentSelectOption>
        </ComponentSelectSelectElement>
      </ComponentSelectField>

      <ComponentSelectField>
        <ComponentSelectLabel>Species</ComponentSelectLabel>
        <ComponentSelectSelectElement  name="species" value={ species } onChange={ onInputChange }>
          <ComponentSelectOption value=''>Select a specie</ComponentSelectOption>
          <ComponentSelectOption value='human'>human</ComponentSelectOption>
          <ComponentSelectOption value='alien'>alien</ComponentSelectOption>
          <ComponentSelectOption value='humanoid'>humanoid</ComponentSelectOption>
          <ComponentSelectOption value='poopybutthole'>poopybutthole</ComponentSelectOption>
          <ComponentSelectOption value='mythological'>mythological</ComponentSelectOption>
          <ComponentSelectOption value='unknown'>unknown</ComponentSelectOption>
          <ComponentSelectOption value='animal'>animal</ComponentSelectOption>
          <ComponentSelectOption value='disease'>disease</ComponentSelectOption>
          <ComponentSelectOption value='robot'>robot</ComponentSelectOption>
          <ComponentSelectOption value='cronenberg'>cronenberg</ComponentSelectOption>
          <ComponentSelectOption value='planet'>planet</ComponentSelectOption>
        </ComponentSelectSelectElement>
      </ComponentSelectField>

      <ComponentSelectField>
        <ComponentSelectLabel>Gender</ComponentSelectLabel>
        <ComponentSelectSelectElement  name="gender" value={ gender } onChange={ onInputChange }>
          <ComponentSelectOption value=''>Select a gender</ComponentSelectOption>
          <ComponentSelectOption value='female'>female</ComponentSelectOption>
          <ComponentSelectOption value='male'>male</ComponentSelectOption>
          <ComponentSelectOption value='genderless'>genderless</ComponentSelectOption>
          <ComponentSelectOption value='unknown'>unknown</ComponentSelectOption>
        </ComponentSelectSelectElement>
      </ComponentSelectField>

    </CharactersSearchByAttributeContainer>
  )
}
