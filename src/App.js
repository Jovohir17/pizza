import React from 'react';
import Home from './components/home/Home';
import { CartProvider } from 'react-use-cart';
import {useState, useEffect} from 'react';
import { Routes , Route } from "react-router-dom"
import Master from "./Pages/Master"
import Header from "./components/home/Header"
import Footer from "./components/home/Footer"
import Bolim from './ComponentsF/Bolim/Bolim';
import MasterF from './ComponentsF/MasterF';
import About from './ComponentsF/About/About';
import OrderPart from './ComponentsA/\Order/OrderPart';
import Error404 from './Settings/Error404';

export default function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() =>{
    setLoading(true)
    setTimeout(() =>{
      setLoading(false)
    },2500)
  },2500)
  return (
    <div className='App'>
      {
      loading?
      <img className='pizzuk' src="./imgs/pizza__loader.png" alt="Error" />
      :
        <CartProvider>
             <Header/>
                <Routes>
                  <Route path='/' element={<Home/>} />
                  <Route path='*' element={<Error404/>} />
                  <Route path='order' element={<Master/>} />
                  <Route path='/number__order' element={<OrderPart/>} />
                  <Route  path='account' element={<MasterF/>}>
                    <Route path='settings' element={<About/>} />
                    <Route path='history' element={<Bolim/>} />
                  </Route>
                </Routes>
             <Footer/>
        </CartProvider>

    }

    </div>
    
  )
    
}
