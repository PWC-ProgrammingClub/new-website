import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom"
import router from './services/router.tsx'

/**
 * This is the entry point to the application.
 * 
 * It gets the div that will be populated by react and begins the app by calling the App function (see App.tsx) to populate that root div.
 */
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
