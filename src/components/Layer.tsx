import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/auth';

function Layer({children}: { children: React.ReactNode }) {
    const authContext = useAuthContext();
    const handleLogout = () => authContext?.setToken(null);
    
    return (
        <>  
            <header className='bg-gray-100 border-b flex p-4 mb-4'>
                <nav className='flex text-indigo-500 hover:text-indigo-600'>
                    <Link to={'/'} onClick={handleLogout}>Logout</Link>
                </nav>
            </header>

            {children}
        </>
    )
}

export default Layer;