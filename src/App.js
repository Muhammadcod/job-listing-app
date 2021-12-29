import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AdminPage from './components/AdminPage';
import RequireAuth from './components/RequireAuth';
import Register from './components/Register';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Dashboard />} />
        <Route
          path='/admin'
          element={
            <RequireAuth>
              <AdminPage />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
