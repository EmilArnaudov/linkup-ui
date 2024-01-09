import { Navbar } from 'components';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuthStore } from 'stores/auth/AuthStore';

const GuestView = () => {
  const navigate = useNavigate();
  const currentUser = useAuthStore((state) => state.currentUser);

  useEffect(() => {
    if (currentUser) {
      navigate('/app');
    }
  }, [currentUser]);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default GuestView;
