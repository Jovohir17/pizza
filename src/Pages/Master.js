import React from 'react'
// import ListPart from '../ComponentsA/ListPart'
import Cart from '../ComponentsA/Cart'
import CartProps from '../ComponentsA/CartProps'
import CartProps1 from '../ComponentsA/CartProps1'
import Order from '../ComponentsA/Order'
// import { CartProvider } from 'react-use-cart'

function Master() {
  return (
    <>
      {/* <ListPart/> */}
        <Cart/>
        <CartProps/>
        <CartProps1/>
        <Order/>
    </>
  )
}

export default Master