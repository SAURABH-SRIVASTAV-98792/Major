import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

const ProductCard = ({ name, price, description, id }) => {
  const dispatch = useDispatch();

  const addItemCard = () => {
    const productInfo = { name, price, description };
    dispatch(addItem(productInfo));
  };

  return (
    <div className='product-card' key={id}>
      <h1>{name}</h1>
      <h4>Price: ${price}</h4>
      <h3>{description}</h3>
      <button onClick={addItemCard}>Add to cart</button>
    </div>
  );
};

export default ProductCard;
