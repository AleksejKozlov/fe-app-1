import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import './App.css';
import { router } from './pages/routes';
import { AuthProvider } from './context/auth';
import { queryClient } from './hooks/queryClient';

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
      </QueryClientProvider>
    </>
  )
}

export default App;
