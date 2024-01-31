import MainMenu from 'components/MainMenu/MainMenu';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
const SharedLayout = () => {
  return (
    <>
      <MainMenu />
      <Suspense fallback={<p>...Loading</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
