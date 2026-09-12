import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/api/products")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    }, []);

    return (
        <div>
            <h1>Product Catalogue</h1>
            <ProductList products={products} />
        </div>
    );
}

export default App;