import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setEpisodeProperty } from "../../store/slices/episode.slice";
import { setLocationProperty } from "../../store/slices/location.slice";

export const useList = ( name, dependecy, amount ) => {

  const dispatch = useDispatch();
  const arrayAmount = new Array(amount).fill().map( (_, i) => i + 1 );

  useEffect( () => {

    if ( name === 'locationSelected' ) {
      dispatch( setLocationProperty({ property: 'locationNumber', value: dependecy }) );
    } else {
      dispatch( setEpisodeProperty({ property: 'episodeNumber', value: dependecy }) );
    }

  }, [dependecy]);

  return {
    arrayAmount
  }

}
