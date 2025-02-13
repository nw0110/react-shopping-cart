import {useOutletContext} from "react-router-dom";
import CartProductView from "../cartProductView/cartProductView.jsx";
import styles from './cart.module.css';

function Cart() {
    const {productData, setProductData, cartData, setCartData} = useOutletContext();
    return (
        <div className={styles.cartView}>
            <h1>Shopping Cart:</h1>
            {cartData.map((cartProduct) => <CartProductView key={cartProduct.id} product={productData.find(actualProduct => actualProduct.id === cartProduct.id)} quantity={cartProduct.quantity}/>)}
            <button>Continue to Checkout</button>
        </div>
    );
}

export default Cart