import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './pages/routes';
import { AuthProvider } from './context/auth';

function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  )
}

export default App;
