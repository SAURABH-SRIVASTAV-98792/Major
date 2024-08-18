import React from 'react'
import ProductCard  from './ProductCard';
import { products } from '../assets/products';

const Body = () => {
  return (
    <div className="flex flex-wrap pb-60 justify-center">
      {products.map((product) => {
                return (
                 <ProductCard key={product.id} {...product} />
                )
            })}
    </div>
  )
}

export default Body