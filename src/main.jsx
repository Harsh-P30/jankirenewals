import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Route from './components/routers/Route'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import ProductPage from './pages/ProductPage.jsx'
import { StrictMode } from 'react'
import ProductDescription from './pages/ProductDescription.jsx'


const router= createBrowserRouter(

    [
      {
        path :'/',
        element:<Route/>,
        children:[
          {
            path:'',
            element:<HomePage/>
          },
          {
            path:'/about',
            element:<AboutPage />
          },
          {
            path:'/product',
            element:<ProductPage />
          },
          {
            path:'/contact',
            element:<ContactPage/>
          },
          {
            path:'/productDescription',
            element:<ProductDescription/>
          },

        ]
      }
    ]
)




createRoot(document.getElementById('root')).render(
 <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
