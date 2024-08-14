import ProductCard from "./ProductCard";
import { products } from "./assets/products";
const Body = () => {

    return (
<div className="main-body">
    <div>
        {
    products.map((product) => {
     return (
        <div className="product-list"> <ProductCard {...product} /> </div>
        )
    })
}
    </div>
</div>
    )
};

export default Body;