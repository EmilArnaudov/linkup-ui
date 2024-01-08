import { Navbar } from 'components';
import { Outlet } from 'react-router-dom';

const MainTemplate = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainTemplate;
