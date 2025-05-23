import { Routes, Route } from 'react-router-dom';
import PrivateRoute from '@/components/private-route';
import Layout from '@/components/ui/layout';
import Login from '@/pages/login';
import Feed from '@/pages/feed';
import Profile from '@/pages/profile';
import { useState } from 'react';

function App() {
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem('isAuth'));

  const handleLogin = () => {
    localStorage.setItem('isAuth', 'true');
    setIsAuth(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuth');
    setIsAuth(false);
  };

  return (
    <Routes>
      {/* Публичный маршрут без лейаута */}
      <Route path="/login" element={<Login onLogin={handleLogin} />} />

      {/* Приватные маршруты с лейаутом */}
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route element={<Layout isAuth={isAuth} onLogout={handleLogout} />}>
          <Route path="/" element={<Feed />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Route>

      {/* 404 */}
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}

export default App;
