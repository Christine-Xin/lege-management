

import {Outlet,Link, useRoutes} from 'react-router-dom'
import router from './router'

function App() {
  const routes=useRoutes(router)
  return (
    <div className="App">
      {/* <Link to="/home">Home</Link>
      <Link to ="/about">About</Link> */}
      {/* <Outlet/> */}
      {routes}
    </div>
  )
}

export default App
