import React from 'react'
import { useAuth} from "../context/AuthContext";
import { BrowserRouter } from "react-router-dom"
import PrivateRoute from "./PrivateRoute"
import PublicRoute from "./PublicRoute"
import NavBar from "../components/NavBar/NavBar"


const AppRouter = () => {

  const { user } = useAuth();

  if (user === null) {
    
    return (

      <BrowserRouter>
        <NavBar />
        <PublicRoute />
      </BrowserRouter >
    )
  }

  return (

      <BrowserRouter>
        <NavBar />
        <PrivateRoute />
      </BrowserRouter > 
    
  )
}

export default AppRouter