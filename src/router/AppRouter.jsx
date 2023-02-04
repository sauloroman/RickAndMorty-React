import { Navigate, Route, Routes } from "react-router-dom"
import { useAuthentication } from "../auth/hooks/useAuthentication"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { RickAndMortyRoutes } from "../rickandmorty"

export const AppRouter = () => {

  const status = useAuthentication();

  // if ( status === 'checking' ) {
  //   return (<></>)
  // }

  return (
    <Routes>

      {
        (status === 'authenticated') 
        ? <Route path='/*' element={ <RickAndMortyRoutes /> } />
        : <Route path='auth/*' element={ <AuthRoutes /> } />
      }

      <Route path='/*' element={ <Navigate to='/auth/login' /> } />
    </Routes>
  )
}
