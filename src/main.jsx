import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home.jsx';
import Favarite from './Components/Favarite/Favarite.jsx';
import Cart from './Components/Cart/Cart.jsx';
import Singin from './Components/SingIn/Singin.jsx';
import Singup from './Components/Singup/Singup.jsx';



const route=createBrowserRouter([
  {
    path:"/",
    element: <App></App>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/fav',
        element:<Favarite></Favarite>
      },
      {
        path:'/cart',
        element:<Cart></Cart>
      },
      {
        path:'/singin',
        element:<Singin></Singin>
      },
      {
        path:'/singup',
        element:<Singup></Singup>
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </React.StrictMode>,
)
