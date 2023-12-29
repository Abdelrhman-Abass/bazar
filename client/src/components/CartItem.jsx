// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
const CartItem = () => {
    const productData = useSelector((state) =>state.bazar.productData)
    const dispatch = useDispatch();
    console.log(productData)

  return (
    <div className='flex gap-4'>
        <div>
            <img src={productData.image} alt="" />
        </div>
      
    </div>
  )
}

export default CartItem
