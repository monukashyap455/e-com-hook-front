import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Nav from './Components/Navbar/Nav';
import Signup from './Components/Pages/Signup';
import Footer from './Components/Pages/Footer';
import PrivateComponents from './Components/Pages/PrivateComponents';
import Login from './Components/Pages/Login';
import AddProducts from './Components/Pages/AddProducts';
import GetProducts from './Components/Pages/GetProducts';
import UpdateProduct from './Components/Pages/UpdateProduct';


const App = () => {

  return (
    <div className='App' >
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponents />}>
            <Route path='/' element={<GetProducts />}></Route>
            <Route path='/addProducts' element={< AddProducts />}></Route>
            <Route path='/update/:id' element={< UpdateProduct />}></Route>
            <Route path='/logout' element={<h1>Logout Componenets</h1>}></Route>
            <Route path='/profile' element={<h1>profile Componenets</h1>}></Route>
          </Route >
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App;