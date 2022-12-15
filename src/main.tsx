import React from 'react'
import ReactDOM from 'react-dom/client'
import "reset-css"
import '@/assets/style/global.scss'
import App from './App'
import Router from './router'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <Router /> */}
    <BrowserRouter>
        <App/>
    </BrowserRouter>
  </React.StrictMode>
)
