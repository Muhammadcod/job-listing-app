import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AdminPage from './components/AdminPage';
import RequireAuth from './components/RequireAuth';
import Register from './components/Register';
import useToken from './services/useToken';

function App() {
  const { token, setToken } = useToken();
  return (
    <div className='App'>
      <Routes>
        <Route path='/login' element={<Login setToken={setToken} />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Dashboard />} />
        <Route
          path='/admin'
          element={
            <RequireAuth token={token}>
              <AdminPage />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
