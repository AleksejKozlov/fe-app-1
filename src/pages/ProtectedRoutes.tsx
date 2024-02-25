import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from '../context/auth';
import Layer from '../components/Layer';

function ProtectedRoutes() {
	const authContext = useAuthContext();

	return authContext?.token ? <Layer><Outlet /></Layer> : <Navigate to="/login" replace />;
};

export default ProtectedRoutes;