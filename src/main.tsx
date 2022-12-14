import React from 'react'
import ReactDOM from 'react-dom/client'
import "reset-css"
import '@/assets/style/global.scss'
// import App from './App'
import Router from './router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
)
