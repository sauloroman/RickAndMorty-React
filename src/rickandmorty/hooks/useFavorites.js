import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addFavorite, deleteFavorite } from "../../store/slices/favorites.slice";

export const useFavorites = () => {

  const dispatch = useDispatch();

  const selectedCharacter = useSelector( store => store.selectedCharacter );

  const favorites = useSelector( store => store.favorites );

  const onToggleFavorite = () => {
    if ( favorites.includes( selectedCharacter ) ) {
      dispatch( deleteFavorite( selectedCharacter.id ) );
    } else {
      dispatch( addFavorite( selectedCharacter ) );
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  return {
    onToggleFavorite,
    favorites
  }

}
