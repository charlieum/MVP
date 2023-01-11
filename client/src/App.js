import Body from './Body';
import Info from './Info';
import Root from './Root';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Body />} />
        <Route path='/info' element={<Info />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
