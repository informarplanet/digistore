
import { Outlet } from 'react-router-dom'
import Header from './Components/Header/Header'

function App() {
 

  return (
    <>
    <div>
      <Header></Header>
      <Outlet></Outlet>
      
    </div>
      
    </>
  )
}

export default App
