import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/ui/layout';
import Login from '@/pages/login';
import Feed from '@/pages/feed';
import { UserProfilePage } from './pages/user-profile-page';
import PrivateRoute from './components/private-route';

function App() {
  return (
    <Routes>
      {/* Публичные маршруты */}
      <Route path="/login" element={<Login />} />

      {/* Приватные маршруты */}
      <Route element={<PrivateRoute />}>
        <Route element={<Layout />}>
          <Route index element={<Feed />} />
          <Route path="/profile" element={<UserProfilePage />} />
        </Route>
      </Route>

      {/* 404 */}
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}

export default App;
