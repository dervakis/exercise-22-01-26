import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout1 from './layout/Layout1'
import Home from './pages/Home'
import ItemDetails from './pages/ItemDetails'
import Cart from './pages/Cart'

function App() {

  const router = createBrowserRouter([
    {
      element: <Layout1/>,
      children: [
        {
          path: "/shop",
          children: [
            {index: true, path:"products", element:<><Home/></>},
            {path: "product/:id", element:<><ItemDetails/></>},
            {path: "cart", element:<><Cart/></>}
          ]
        },
        {path: "/about", element:<>about page ahi</>},
        {path: "*", element:<>no page found</>}
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App
