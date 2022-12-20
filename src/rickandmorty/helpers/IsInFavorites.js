export const IsInFavorites = ( favorites, id ) => {
  for( let i = 0; i < favorites.length; i++ ) {
    if ( favorites[i].id === id ) {
      return true;
    }
  }

  return false;
}
