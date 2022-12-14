

import {Outlet,Link} from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Link to="/home">Home</Link>
      <Link to ="/about">About</Link>
      <Outlet/>
    </div>
  )
}

export default App
