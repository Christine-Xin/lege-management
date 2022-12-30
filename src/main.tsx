import React from 'react'
import ReactDOM from 'react-dom/client'
import "reset-css"
import '@/assets/style/global.scss'
import App from './App'
import Router from './router'
import { BrowserRouter } from 'react-router-dom'

// 状态管理
import {Provider} from 'react-redux'
import store from '@/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    {/* <Router /> */}
    <BrowserRouter>
        <App/>
    </BrowserRouter>
  </Provider>
)
