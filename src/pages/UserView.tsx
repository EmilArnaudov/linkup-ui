import { Navbar } from 'components';
import { useEffect } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useAuthStore } from 'stores/auth/AuthStore';

const ProtectedRoutes = () => {
  const navigate = useNavigate();
  const currentUser = useAuthStore((state) => state.currentUser);

  useEffect(() => {
    if (!currentUser) {
      navigate('/');
    }
  }, [currentUser, navigate]);

  return currentUser ? (
    <>
      <Navbar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/" replace />
  );
};

export default ProtectedRoutes;
