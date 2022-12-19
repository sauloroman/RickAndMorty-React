import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEpisodeProperty } from "../../store/slices/episode.slice";
import { Spinner } from "../../ui/components";
import { EpisodesGrid, EpisodesInformation, EpisodesList} from "../components"
import { useFetch } from "../hooks";
import { LayoutPage } from "../layout"

export const EpisodePage = () => {

  const dispatch = useDispatch();

  const { episodeNumber } = useSelector( store => store.episode );

  const { data, isLoading } = useFetch(`https://rickandmortyapi.com/api/episode/${episodeNumber}` );

  useEffect( () => {
    dispatch( setEpisodeProperty({ property: 'episodeNumber', value: 1 }) )
  }, [])

  useEffect( () => {
    dispatch( setEpisodeProperty({ property: 'information', value: data }))
  }, [data]);

  return (
    <LayoutPage title={'Episodes'}>
      <EpisodesList />

      {
        isLoading 
        ? (<Spinner />)
        : (
          <>
            <EpisodesInformation />
            <EpisodesGrid />
          </>
        )
      }
    </LayoutPage>
  )
}
