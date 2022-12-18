import { Navigate, Route, Routes } from "react-router-dom"
import { CharactersPage, EpisodePage, LocationPage, SettingsPage } from "../pages"

export const RickAndMortyRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={ <CharactersPage /> } />
      <Route path='episode' element={ <EpisodePage /> } />
      <Route path='location' element={ <LocationPage /> } />
      <Route path='settings' element={ <SettingsPage /> } />
      <Route path='/*' element={ <Navigate to='/' />} />
    </Routes>
  )
}
