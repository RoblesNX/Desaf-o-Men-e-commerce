import { Navigate, Outlet } from 'react-router-dom'
import { useAuthContext } from "../context/AuthContext"
import Loader from '../components/Loader/Loader'


const PrivateRoutes = () => {
    
    const { user, loading} = useAuthContext()

    if (loading) return <Loader />
    
    return user
    ? <Outlet />
    : <Navigate to="/login"/>
}

export default PrivateRoutes