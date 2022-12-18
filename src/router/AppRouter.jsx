import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth"
import { RickAndMortyRoutes } from "../rickandmorty"

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='login' element={ <LoginPage /> } />
        <Route path='/*' element={ <RickAndMortyRoutes /> } />
      </Routes>
    </>
  )
}
