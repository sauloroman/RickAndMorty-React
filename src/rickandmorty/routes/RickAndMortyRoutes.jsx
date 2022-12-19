import { Navigate, Route, Routes } from "react-router-dom"
import { CharactersPage, EpisodePage, FavoritesPage, LocationPage } from "../pages"

export const RickAndMortyRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={ <CharactersPage /> } />
      <Route path='episode' element={ <EpisodePage /> } />
      <Route path='location' element={ <LocationPage /> } />
      <Route path='favorites' element={ <FavoritesPage /> } />
      <Route path='/*' element={ <Navigate to='/' />} />
    </Routes>
  )
}
