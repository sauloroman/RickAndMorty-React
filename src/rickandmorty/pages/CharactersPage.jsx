import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCharacters } from "../../store/slices/characters.slice";
import { setPagination } from "../../store/slices/pagination.slice";
import { LayoutPage } from "../layout";
import { CharactersList, NoCharacters, PageTitle, SearchByAttribute, SearchCharacterByName } from "../components";
import { Pagination, Spinner } from "../../ui/components";
import { useFetch } from "../hooks";


export const CharactersPage = () => {

  const dispatch = useDispatch();
  const [urlCharacters, setUrlCharacters] = useState('https://rickandmortyapi.com/api/character');
  const characters = useSelector( store => store.characters );
  const { data, isLoading } = useFetch( urlCharacters );

  useEffect( () => {
    dispatch( setCharacters( data?.results ) );
    dispatch( setPagination( data?.info ) )
  }, [ data ] );

  const onNewUrlCharacters = ( newUrl ) => {
    setUrlCharacters( newUrl );
  }
  
  return (
    <LayoutPage>
      <PageTitle>Your characters</PageTitle>
      <SearchCharacterByName />
      <SearchByAttribute />

      { isLoading 
        ? (<Spinner />)
        : ( 
          characters.length
          ? (<CharactersList />) 
          : (<NoCharacters/>)
        )
      }
      
      <Pagination onNewUrl = {onNewUrlCharacters} />  
    </LayoutPage>
  )
}