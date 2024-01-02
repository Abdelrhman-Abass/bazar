// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Home ,Cart,Login } from './pages'
import { Footer, Header, Product } from './components'
import { productsData } from './api/Api'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  ScrollRestoration,
} from "react-router-dom";

const Layout = ()=>{
  return (
    <>
      <Header/>
      <ScrollRestoration />
      <Outlet/>
      <Footer/>
    </>
  )
}

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children:[
      {
        path:'/',
        element:<Home />,
        loader:productsData

      },
      {
        path:"/product/:id",
        element:<Product/>
      },
      {
        path:'/cart',
        element:<Cart />,
      },
      {
        path:'/login',
        element:<Login/>
      }

    ]
  }
])

function App() {
  return (
    <div className='font-bodyFont'>
      <RouterProvider router={Router}/>
    </div>
  )
}

export default App
