import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { RickAndMortyRoutes } from "../rickandmorty"

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='auth/*' element={ <AuthRoutes /> } />
        <Route path='/*' element={ <RickAndMortyRoutes /> } />
      </Routes>
    </>
  )
}
