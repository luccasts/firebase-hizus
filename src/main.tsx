import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './routes.tsx'
import './index.css'
import FormProvider from './context/Form.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FormProvider>
      <AppRoutes />
    </FormProvider>
  </React.StrictMode>,
)
