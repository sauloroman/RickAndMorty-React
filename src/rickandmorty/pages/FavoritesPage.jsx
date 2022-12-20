import { useSelector } from "react-redux"
import { FavoritesCard, FavoritesSlider, ComponentList, FavoritesEmpty } from "../components";
import { LayoutPage } from "../layout"

export const FavoritesPage = () => {

  const favorites = useSelector( store => store.favorites );

  return (
    <LayoutPage title='Your Favourites Characters'>
      {
        favorites.length ?
        (
          <>
            <FavoritesSlider />
            <ComponentList style={{ gridTemplateColumns: 'repeat(3, 1fr)'}}>
              {
                favorites.map( favorite => (
                  <FavoritesCard key={favorite.id} favorite={favorite}/>
                ))
              }
            </ComponentList>
          </>
        ) : 
        (
          <FavoritesEmpty />
        )
      }
      
    </LayoutPage>
  )
}
