// eslint-disable-next-line no-unused-vars
import React from 'react'
import {CartItem} from '../components/index'

const Cart = () => {
  return (
    <div>
      <img
        className="w-full h-60 object-cover"
        src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="cartImg"
      />
      <div className='mx-auto max-w-screen-lg py-20 flex justify-between'>
        <div>
          <h2>Shopping Cart </h2>
          <CartItem />
        </div>

        <div className=''>
          <p>Cart totals</p>
          <div>
            <p>subtotal</p>
            <p>$ {170.99}</p>
          </div>
          <div>
            <p>shipping</p>
            <p>lorem</p>
          </div>
          <br></br>
          <div>
            <p>Total</p>
            <p>${170.55}</p>
          </div>
          <button type='submit'>Checkout</button>
        </div>

      </div>      

    </div>
  )
}

export default Cart
