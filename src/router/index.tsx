/**路由表式路由 */
import Home from '../views/Home'
// import About from '../views/About'
import {Navigate} from 'react-router-dom'
// 路由懒加载
import React,{lazy} from 'react'
const About = lazy(()=>import("../views/About"))
const Page1 = lazy(()=>import("../views/Page1"))
const Page2 = lazy(()=>import('../views/Page2'))
const Page301 = lazy(()=>import('../views/Page301'))

const withLoadingComponent=(comp:JSX.Element)=>(
    <React.Suspense fallback={<div>Loading...</div>}>
            {comp}
        </React.Suspense>
)

const baseRouter=[
    {
        path:'/',
        element:<Navigate to="/page1"/>
    },
    {
        path:"/",
        element:<Home/>,
        children:[
            {
                path:'/page1',
                element:withLoadingComponent(<Page1/>)
            },
            {
                path:'/page2',
                element:withLoadingComponent(<Page2/>)
            },
            {
                path:'/page301',
                element:withLoadingComponent(<Page301/>)
            }
        ]
    },
    // {
    //     path:"/about",
    //     // element:<About/>
    //     element:withLoadingComponent(<About/>)
    // },
    {
        path:'*',
        element:<Navigate to="/page1"/>
    }
    
]
export default baseRouter