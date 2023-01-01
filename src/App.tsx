

import { useEffect } from 'react';
import {Outlet,Link, useRoutes,useLocation,useNavigate} from 'react-router-dom'
import router from './router'
import {message} from 'antd'
function ToPage1(){
  const navigateTo= useNavigate()
  // 加载完组件之后进行跳转
  useEffect(()=>{
    navigateTo('/page1')
    message.warning('您已登录！')
  },[])
  return <div></div>
}
function ToLogin(){
  const navigateTo= useNavigate()
  useEffect(()=>{
    navigateTo('/login')
    message.warning('您还没有登录！')
  },[])
  return <div></div>
}
// 路由守卫
function BeforeRouterEnter(){
  const outlet = useRoutes(router)
  /**
   * 1:如果访问的是登录页面，并且有token, 跳转至首页
   * 2：如果访问的不是登录页面，并且没有token,跳转至登录页
   * 3：其余的正常放行
   */
  const location=useLocation();
  console.log(location)
  let token=localStorage.getItem("lege-management-token");
  if(location.pathname==='/login' && token){
    return <ToPage1 />
  }
  if(location.pathname!=='/login' && !token){
    return <ToLogin/>
  }
  return outlet
}
function App() {
  return (
    <div className="App">
      {/* <Link to="/home">Home</Link>
      <Link to ="/about">About</Link> */}
      {/* <Outlet/> */}
      <BeforeRouterEnter/>
    </div>
  )
}

export default App
