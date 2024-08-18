import React from 'react'
import ItemCard from './ItemCard'
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
  const itemDetails = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  return (
    <div className="pb-60 flex flex-row" >
      {/* <h1 className="font-bold text-3xl"> Cart Items - {cartItems.length}</h1>
      <button
        className="bg-green-100 p-2 m-5"
        onClick={() => handleClearCart()}
      >
        Clear Cart
      </button> */}
      <div className ='ml-1'>
      {itemDetails.map((itemDetail) => {
                return (
                    <ItemCard key={itemDetail.id} {...itemDetail}/>
                )
            })}
    </div>
    <div>
        Cart Summary
      </div>
    </div>
  )
}

export default Cart