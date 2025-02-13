import PropTypes from 'prop-types';
import styles from './productCard.module.css';
import {useState} from "react";
import cart from "../cart/cart.jsx";

function ProductCard({product, cartData, setCartData}) {
    const [specificQuantity, setSpecificQuantity] = useState(1);
    const MIN_QUANTITY = 0;
    const MAX_QUANTITY = 99;


    const handleDecreaseQuantity = () => {
        if(specificQuantity > MIN_QUANTITY) {
            setSpecificQuantity(specificQuantity - 1);
        }
    }

    const handleIncreaseQuantity = () => {
        if(specificQuantity < MAX_QUANTITY) {
            setSpecificQuantity(specificQuantity + 1);
        }
    }

    const handleQuantityChange = (e) => {
        const enteredSpecificQuantity = Number(e.target.value)
        if(enteredSpecificQuantity >= MIN_QUANTITY && enteredSpecificQuantity <= MAX_QUANTITY) {
            setSpecificQuantity(enteredSpecificQuantity);
        }
    }

    function handleAddToCart() {
        const productInCart = cartData.find(item => item.id === product.id);
        let updatedCartData;

        if (productInCart) {
            updatedCartData = cartData.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + specificQuantity }
                    : item
            );
        } else {
            updatedCartData = [...cartData, { id: product.id, quantity: specificQuantity }];
        }

        setCartData(updatedCartData);
    }

    return (
        <div className={styles.productCard}>
            <img src={product.image}/>
            <div>{product.title}</div>
            <div>{product.price + '€'}</div>
            <div className={styles.cardInputs}>
                <div className={styles.quantityInputs}>
                    <button onClick={handleDecreaseQuantity}>-</button>
                    <input min={0} max={99} type="number" value={specificQuantity} onChange={handleQuantityChange}/>
                    <button onClick={handleIncreaseQuantity}>+</button>
                </div>
                <button className={styles.addToCartBtn} onClick={handleAddToCart}>
                    Add to cart
                </button>
            </div>
        </div>);
}

ProductCard.propTypes = {
    product: PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }).isRequired,
    cartData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
        })
    ).isRequired,
    setCartData: PropTypes.func.isRequired,
};

export default ProductCard;