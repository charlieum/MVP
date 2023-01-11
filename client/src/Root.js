import Navigation from './Navigation';
import Header from './Header';
import {
  Outlet,
} from 'react-router-dom';

function Root () {
  return (
    <>
      <Navigation />
      <Header />
      <>
        <Outlet />
      </>
    </>
  );
}

export default Root;