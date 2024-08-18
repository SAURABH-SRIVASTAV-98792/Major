import React from 'react';
import logo from '../logo.svg';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

const ProductCard = ({id, name, price, description,imageURL}) => {
    const dispatch = useDispatch();

  const addItemCard = () => {
    const item = { id, name, price, description,imageURL};
    dispatch(addItem(item));
  };
  return (
    <div className="w-72 p-3 m-3 shadow-lg bg-purple-50">
            <img className="mb-3" src= {imageURL} alt='logo' />
            <div className="">
                <h2 className="font-bold text-xl">{name}</h2>
                <h4>{description}</h4>
                <div className='flex flex-row justify-between items-center mt-3'> 
                <div>
                <span className="font-semibold">4.2</span><span> ⭐</span>
                <h4 className='mt-1'>₹ {price}</h4>
                </div>
                <div>
                <button className='bg-orange-400 p-2 rounded-md font-semibold ' onClick={addItemCard}>Add to Cart</button>
                </div>
                </div>
            </div>
        </div>
  )
}

export default ProductCard
