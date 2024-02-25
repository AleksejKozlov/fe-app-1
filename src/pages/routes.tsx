import { Navigate, createBrowserRouter } from 'react-router-dom';
import Login from './login/Login';
import Servers from './servers/Servers';
import ProtectedRoutes from './ProtectedRoutes';

export const router = createBrowserRouter([
    // public routes
    {
        path: "/",
        element: <Navigate to="/servers" replace />,
    },
    {
        path: "*",
        element: <Navigate to="/" replace />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    // protected routes
    {
        element: <ProtectedRoutes />,
        children: [
            {
                path: "/servers",
                element: <Servers />,
            },
        ] 
    }
]);