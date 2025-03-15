import { useState } from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import HomePage from './pages/HomePage'
import ItemPage from './pages/ItemPage';
import CartPage from './pages/CartPage';
import "antd/dist/antd.min";
import "./index.css"

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/items' element={<ItemPage/>}/>
    <Route path='/cart' element={<CartPage/>} />
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
