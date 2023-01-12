import Root from './Root';
import Info from './Info';
import Posts from './Posts';
import Submit from './Submit';
import Comments from './Comments';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import {
  BodyAll,
  BodyContent,
  BodySide,
  BodySpace,
} from './Css.style';

function Body () {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Posts />} />
        <Route path='/submit' element={<Submit />} />
        <Route path='/posts/:id' element={<Comments />} />
      </Route>
    )
  )

  return (
    <BodyAll>
      <BodyContent>
        <RouterProvider router={router}/>
        <BodySpace></BodySpace>
        <BodySide>
          <Info />
        </BodySide>
      </BodyContent>
    </BodyAll>
  );
}

export default Body;


// import Info from './Info';
// import Posts from './Posts';
// import { BodyAll, BodyContent, BodyMain, BodySide } from './Css.style';

// function Body () {

//   return (
//     <BodyAll>
//       <BodyContent>
//         <BodyMain>
//           <Posts />
//         </BodyMain>
//         <BodySide>
//           <Info />
//         </BodySide>
//       </BodyContent>
//     </BodyAll>
//   );
// }

// export default Body;
