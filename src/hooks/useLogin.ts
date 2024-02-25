import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { getToken } from '../apis/getToken';
import { useAuthContext } from '../context/auth';

export function useLogin() {
    const navigate = useNavigate();
    const authContext = useAuthContext();

    return useMutation({
        mutationFn: getToken,
        onSuccess: ({ token }) => {
            authContext?.setToken(token);
            navigate('/');
        },
        onError: (error) => {
            console.log(error);
        }
    });
}
