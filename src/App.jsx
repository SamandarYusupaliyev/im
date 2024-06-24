import { createBrowserRouter,RouterProvider,Navigate} from 'react-router-dom'

// Layout
import MainLayout from "./layout/MainLayout"

// pgeas
import Home from "./pages/Home"
import About from "./pages/About"
import  Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Create from "./pages/Create"
import SingleRecipie from './pages/SingleRecipe'
import Contact from './pages/Contact'
import Cart from "./pages/Cart"

// components
import ProtectedRotes from './components/ProtectedRotes'
import Navbar from './components/Navbar'

//context
import { useContext, useEffect } from 'react'
import { GlobalContext } from './context/useGlobalContext'


// firebase
import { auth } from './firebase/firebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'

// action
import { action as signupAction } from './pages/Signup'
import { action as signinAction } from './pages/Signin'
import { action as createAction } from './pages/Create'
import SingleRecipe from './pages/SingleRecipe'

// loader
import {loader as singleRecipieLoader} from './pages/SingleRecipe'


function App(){
  const {user,dispatch,authChange}=useContext(GlobalContext)
  const routes =createBrowserRouter([
    {
      path:"/",
       element:(
       <ProtectedRotes user={user}>
         <MainLayout/>
       </ProtectedRotes>),
      children:[
        {
          index:true,
          element :<Home/>
        },
        {
          path:'/about',
          element:<About/>,
        },
        {
          path:'/contact',
          element:<Contact/>,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path:'/create',
          element: <Create/>,
          action:createAction,
        },
        {
          path:"/singleRecipie/:id",
          element:<SingleRecipie/>,
          loader:singleRecipieLoader,
        }
      ]
    },
    {
      path:"/signin",
      element:user ? <Navigate to="/" />:<Signin/>,
      action:signinAction,
    },
    {
      path:"/signup",
      element:user ? <Navigate to="/" />:<Signup/>,
      action:signupAction,
    },
  ])
 
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
  dispatch({
    type:"SIGN_IN",
    payload:user,
  });
  dispatch({
    type:"AUTH_CHANGE",
  })
})
},[])

  return <>{authChange && <RouterProvider router={routes}/>}</>
}

export default App

