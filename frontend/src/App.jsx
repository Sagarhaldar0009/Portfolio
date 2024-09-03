import  { Route, Routes } from "react-router-dom"
import Login from './Pages/Login'
import MainPage from "./Pages/MainPage"

function App() {

  return (
    <>
      
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      
    </>
  )
}

export default App
