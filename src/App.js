import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'
import ProductDetail from './Pages/ProductDetail'
import Dashboard from './Pages/Dashboard'
import Admin from './Pages/Admin'
import AddProduct from './Pages/AddProduct'
import Productlist from './Pages/Productlist'
import EditPage from './Pages/EditPage'
import Orderlist from './Pages/Orderlist'




function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/product-detail' element={<ProductDetail/>}></Route>
        <Route path='/Dashboard' element={<Dashboard/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
        <Route path='/dashboard/addproduct' element={<AddProduct/>}></Route>
        <Route path='/dashboard/product-list' element={<Productlist/>}></Route>
        <Route path='/dashboard/edit-product' element={<EditPage/>}></Route>
        <Route path='/dashboard/order-list' element={<Orderlist/>}></Route>

      </Routes>
    </HashRouter>
  )
}

export default App