import React from 'react';

import { removeItem } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';

const ItemCard = ({id, name, price, description,imageURL}) => {
      const dispatch = useDispatch();
      const removeItemInfo = () => {
        dispatch(removeItem(id));
      };
  return (
    <div className='flex shadow-lg  p-3 m-3 bg-purple-50'>
        <span><img className="mb-3 w-36 h-16" src= {imageURL} alt='logo' /></span>
        <div>
            <div className="font-bold text-xl">{name}</div>
            <div className=''>{description}</div>
            <div className="font-semibold">₹ {price}</div>
        </div>
        <div className='flex items-center justify-end grow'>
            <div><input /></div>
            <button className='bg-green-500 p-2 m-4 rounded-md' onClick={removeItemInfo}>Remove</button>
        </div>
    </div>

  )
};

export default ItemCard;