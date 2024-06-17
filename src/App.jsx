import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

//layouts
import MainLayout from "./layout/MainLayout";

//pages
import Home from './page/Home'
import Login from "./page/Login";
import Register from "./page/Register";
import Create from "./page/Create";
import RecipeDetail from "./page/RecipeDetail";
import Chart from "./page/Chart";
import Cart from './page/Cart'

//components
import Error from "./components/Error";
import ProtectedRoutes from "./components/ProtectedRoutes";

// redux
import { useSelector, useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";
import { isAuthReady } from "./features/userSlice";

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.currentUser);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      // errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/create",
          element: <Create />,
        },
        {
          path: "/recipe/:id",
          element: <RecipeDetail />,
        },
        {
          path: "/chart",
          element: <Chart />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Register />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        dispatch(login(user));
        dispatch(isAuthReady());
      }
    });
  }, [user]);

  return <>{<RouterProvider router={routes} />}</>;
}

export default App;
