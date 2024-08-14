import React from 'react'
import ItemCard from './ItemCard'
import { products } from './assets/products'
import { useSelector } from 'react-redux'

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
  return (
    <div>
        {
    cartItems.map((product) => {
     return (
        <div className="product-list"> <ItemCard {...product} /> </div>
        )
    })
}
    </div>
  )
}

export default Cart