/**路由表式路由 */
import Home from '../views/Home'
// import About from '../views/About'
import {Navigate} from 'react-router-dom'
// 路由懒加载
import React,{lazy} from 'react'
const About = lazy(()=>import("../views/About"))

const withLoadingComponent=(comp:JSX.Element)=>(
    <React.Suspense fallback={<div>Loading...</div>}>
            {comp}
        </React.Suspense>
)

const baseRouter=[
    {
        path:'/',
        element:<Navigate to="/home"/>
    },
    {
        path:"/home",
        element:<Home/>
    },
    {
        path:"/about",
        // element:<About/>
        element:withLoadingComponent(<About/>)
    }
]
export default baseRouter