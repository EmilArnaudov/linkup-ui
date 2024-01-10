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
      <Outlet />
    </>
  );
};

export default GuestView;
