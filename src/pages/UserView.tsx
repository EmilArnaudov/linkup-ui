import { Navbar } from 'components';
import { useEffect } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { socket } from 'socket';
import { useAuthStore } from 'stores/auth/AuthStore';
import { useGamesStore } from 'stores/games/GamesStore';

const ProtectedRoutes = () => {
  const navigate = useNavigate();
  const currentUser = useAuthStore((state) => state.currentUser);
  const getAllGames = useGamesStore((state) => state.getAllGames);

  useEffect(() => {
    if (!currentUser) {
      navigate('/');
    }
    socket.connect();

    getAllGames();
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
