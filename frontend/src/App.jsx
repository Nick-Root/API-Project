import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginFormPage from "./componenets/LoginFormPage/LoginFormPage"
import SignupFormPage from "./componenets/SignUpFormPage/SignUpFormPage";
import * as sessionActions from './store/session';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navigation from "./componenets/Navigation/Navgation";

function Layout() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => {
      setIsLoaded(true)
    });
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && <Outlet />}
    </>
  );
}


const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Welcome!</h1>
  },
  {
    path: '/login',
    element: <LoginFormPage />
  },
  {
    path: '/signup',
    element: <SignupFormPage />
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
