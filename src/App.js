 
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Carousel from './components/Carousel';
import ProductComponent from './components/ProductComponent';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { useState } from 'react';
import Cart from './components/Cart';

function App() {

   

  
  return (
    <div className="App">
      {/* <Navbar size={cart.length} /> */}
      {/* <Carousel/> */}
      
          
     
     
         
         <BrowserRouter>
            
         <Routes>
         
          <Route path='/' element={ <HomePage   /> } >  </Route>
         
          <Route path='/product/:id' element={<ProductComponent/>} ></Route>
          <Route path='/cart'  element={<Cart/>} > </Route>
         </Routes>
         </BrowserRouter>

    </div>
  );
}

export default App;
