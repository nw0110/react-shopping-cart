import {useEffect, useState} from "react";
import ProductCard from "../productCard/productCard.jsx";
import styles from "./cardContainer.module.css";
import PropTypes from "prop-types";

function CardContainer({ productData, setProductData, cartData, setCartData }){
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products", { mode: "cors" })
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error("server error");
                }
                return response.json();
            })
            .then((response) => setProductData(response))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, [setProductData]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>A network error was encountered</p>;

    return(
        <div className={styles.productContainer}>
            {productData.map(product => <ProductCard key={product.id} product={product} cartData={cartData} setCartData={setCartData}/>)}
        </div>
    );
}

CardContainer.propTypes = {
    productData: PropTypes.array.isRequired,
    setProductData: PropTypes.func.isRequired,
    cartData: PropTypes.object.isRequired,
    setCartData: PropTypes.func.isRequired,
};

export default CardContainer;