import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import HomePage from './pages/HomePage.tsx'
import Layout from './pages/Layout.tsx'

const router  = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element = {<Layout />}>
      <Route path='/' element = {<HomePage />} /> 
      <Route path='/movies' element = {<App />} /> 
      

  </Route>
  
))
ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
