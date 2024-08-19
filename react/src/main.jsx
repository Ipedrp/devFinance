import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Formulario from './components/Formulario.jsx';
import Entrada from './components/Entrada.jsx';
import Saida from './components/Saida.jsx';
import Card from './components/Card.jsx';
import CardSaida from './components/CardSaida.jsx';
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Formulario/>
      },
      {
        path: 'entrada',
        element: <Entrada/>
      },
      {
        path: 'saida',
        element: <Saida />
      },
      {
        path: '/card',
        element: <Card/>
      },
      {
        path: '/cardSaida',
        element: <CardSaida/>
      }

    ]
  }
]) 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
