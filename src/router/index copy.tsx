/**组件式路由 */

import App from '../App'
import Home from '../views/Home'
import About from '../views/About'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'

// const baseRouter=()=>{
//     return (

//     )
// }
// 当箭头函数没有逻辑时，直接返回（）；当有逻辑时需要返回return()形式，并在return上方写逻辑

const baseRouter=()=>(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}>
                <Route path='/' element={<Navigate to="/home" />}></Route>
                <Route path='/home' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
)
export default baseRouter