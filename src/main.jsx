import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.module.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import routes from "./routes.jsx";
import './variables.css';

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>,
)
