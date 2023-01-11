import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './Css.style.js';
import App from './App';
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
//   Link,
//   Outlet
// } from 'react-router-dom';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<root />}>
//       <Route index element={<Body />} />
//     </Route>
//   )
// )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
