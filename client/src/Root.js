import { BodyMain } from './Css.style';
import {
  Outlet,
} from 'react-router-dom';

function Root () {
  return (
    <BodyMain>
      <Outlet />
    </BodyMain>
  );
}

export default Root;

// import Navigation from './Navigation';
// import Header from './Header';
// import {
//   Outlet,
// } from 'react-router-dom';

// function Root () {
//   return (
//     <>
//       <Navigation />
//       <Header />
//       <>
//         <Outlet />
//       </>
//     </>
//   );
// }

// export default Root;