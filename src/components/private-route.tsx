import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '@/store/hooks';
import { selectCurrentUser } from '@/store/selectors';

export default function PrivateRoute() {
  const user = useAppSelector(selectCurrentUser);

  return user ? <Outlet /> : <Navigate to="/login" />;
}
