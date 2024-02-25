import { Navigate, createBrowserRouter } from 'react-router-dom';
import Login from './login/Login';
import Logout from './logout/Logout';
import Servers from './servers/Servers';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/login" replace />,
    },
    {
        path: "*",
        element: <Navigate to="/login" replace />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/logout",
        element: <Logout />,
    },
    {
        path: "/servers",
        element: <Servers />,
    },
]);