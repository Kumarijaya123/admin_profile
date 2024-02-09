import './App.css'
import Login from './components/home/login/Login'
import Register from './components/home/register/Register'
import Home from './components/home/Home'
import {RouterProvider, createRoutesFromElements, createBrowserRouter, Route} from 'react-router-dom'

const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path='/' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/home' element={<Home/>}/>
  </Route>
))
function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
