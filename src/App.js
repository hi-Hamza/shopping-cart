import React from 'react';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import ProductDetails from './pages/Productdetails';
import Contact from './pages/Contact'
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Owner from './pages/Owner';
import Adrefrnd from './pages/Adrefrnd';
import AllProduct from './pages/AllProducts';

function App() {
  return (
 <>
<Router>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/productdetails' element={<ProductDetails/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/owner' element={<Owner/>}/>
    <Route path='/signin' element={<SignIn/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/adrefrnd' element={<Adrefrnd/>}/>
    <Route path='/allproduct' element={<AllProduct/>}/>
  </Routes>
</Router>
 </>
  );
}

export default App;
