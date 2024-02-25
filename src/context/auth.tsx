import { useContext, createContext, FC } from "react";
import { useLocalStorage } from '../hooks/useLocalStorage';

type AuthContextData = {
    token: string | null;
    setToken: (token: string | null) => void;
};

const AuthContext = createContext<AuthContextData | null>(null);

export const AuthProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    const [token, setToken] = useLocalStorage('token');

    return <AuthContext.Provider value={{token, setToken}}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);