import React from 'react'
import Navbar from './componant/Navbar'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/font-awesome/css/font-awesome.min.css"
import "./App.css"
import Home from './componant/Home'
import {Route, Routes, BrowserRouter} from "react-router-dom"
import Products from './componant/Products'
import Product from './componant/Product'

export default function App() {
  return (<>
  {/* <BrowserRouter>
   <Navbar/>
   <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/products' element={<Products/>}></Route>
      <Route path='/product' element={<Product/>}></Route>
   </Routes>
  </BrowserRouter> */}


  <Navbar/>
  <Routes>
     <Route path='/' element={<Home/>}></Route>
     <Route path='/products' element={<Products/>}></Route>
     <Route path='/product/:id' element={<Product/>}></Route>
  </Routes>
  
 
  </>
  )
}
