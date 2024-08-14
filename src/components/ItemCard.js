const ItemCard = ({name,price,description, id}) => {
    return (
      <div className='product-card' key={id}>
          <h1>{name}</h1>
          <h4>Price : {price}</h4>
          <button>Remove</button>
      </div>
    )
  };
export default ItemCard;