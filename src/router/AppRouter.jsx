import { Navigate, Route, Routes } from "react-router-dom"
import { CharactersPage, ColorsPage, EpisodePage, FavoritesPage, LocationPage } from "../rickandmorty/pages"

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={ <CharactersPage /> } />
      <Route path='episode' element={ <EpisodePage /> } />
      <Route path='location' element={ <LocationPage /> } />
      <Route path='favorites' element={ <FavoritesPage /> } />
      <Route path='colors' element={ <ColorsPage /> } />
      <Route path='/*' element={ <Navigate to='/' />} />
    </Routes>
  )
}
