import ProductCard from "./ProductCard";
import styles from "./ProductList.module.css";
function ProductList({ products }) {
    return (
        <div>
            {products.map((product) => (
                <ProductCard
                    key={product._id}
                    product={product}
                />
            ))}
        </div>
    );
}

export default ProductList;