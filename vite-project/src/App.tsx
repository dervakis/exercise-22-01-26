import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout1 from './layout/Layout1'

function App() {

  const router = createBrowserRouter([
    {
      element: <Layout1/>,
      children: [
        {
          path: "/shop",
          children: [
            {index: true, element:<>Heere show all product</>},
            {path: "procuct/:productId", element:<>detail view of product</>},
            {path: "cart", element:<>cart shown here</>}
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
