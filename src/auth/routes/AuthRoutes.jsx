import { Navigate, Route, Routes } from "react-router-dom"
import { InitPage, LoginPage, RegisterPage } from "../pages"

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="init" element={ <InitPage /> }/>
      <Route path="login" element={ <LoginPage /> }/>
      <Route path="register" element={ <RegisterPage /> }/>
      <Route path="/*" element={ <Navigate to='/auth/init' /> }/>
    </Routes>
  )
}
