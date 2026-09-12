import styles from "./ProductCard.module.css";

function ProductCard({ product }) {
    return (
        <div className={styles.card}>
            <h2>{product.name}</h2>
            <p>Price: ₹{product.price}</p>
            <p>{product.description}</p>
        </div>
    );
}

export default ProductCard;