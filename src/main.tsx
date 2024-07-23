import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './routes.tsx'
import './index.css'
import LoginProvider from './context/Login.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LoginProvider>
      <AppRoutes />
    </LoginProvider>
  </React.StrictMode>,
)
