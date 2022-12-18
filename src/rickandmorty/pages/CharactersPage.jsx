import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCharacters } from "../../store/slices/characters.slice";
import { setPagination } from "../../store/slices/pagination.slice";
import { LayoutPage } from "../layout";
import { CharactersList, SearchCharacterByName } from "../components";
import { Pagination } from "../../ui/components";
import { useFetch } from "../hooks";
import { PageTitle } from "../../RickAndMortyApp";

export const CharactersPage = () => {

  const dispatch = useDispatch();
  const [urlCharacters, setUrlCharacters] = useState('https://rickandmortyapi.com/api/character')
  const { data, isLoading } = useFetch( urlCharacters );

  useEffect( () => {
    dispatch( setCharacters( data?.results ) );
    dispatch( setPagination( data?.info ) )
  }, [ data ] );

  const onNewUrlCharacters = ( newUrl ) => {
    setUrlCharacters( newUrl );
  }
  
  console.log( data );

  return (
    <LayoutPage>
      <SearchCharacterByName />
      <PageTitle>Your characters</PageTitle>
      {
        isLoading 
        ? (<p>Cargando</p>)
        : (<CharactersList />)
      }
      <Pagination onNewUrl = {onNewUrlCharacters} />
    </LayoutPage>
  )
}
