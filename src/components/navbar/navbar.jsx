import styles from "./navbar.module.css"
import logo from "../../assets/store.png";
import cart from "../../assets/cart.png";
import {Link} from "react-router-dom";

import PropTypes from "prop-types";

function Navbar({quantity, currentTotal}) {
    return (
        <div className={styles.navbar}>
            <div className={styles.branding}>
                <Link to="/">
                    <img className={styles.mainLogo} src={logo}/>
                    <h1>SuperStore</h1>
                </Link>
            </div>
            <nav className={styles.navElement}>
                <Link to="/cart" className={styles.cartLink}>
                    <div className={styles.cartIconWithQuantity}>
                        <img src={cart} height={32}/>
                        {quantity > 0 && (
                            <div className={styles.cartQuantity}>{quantity}</div>
                        )}
                    </div>
                    <div>{currentTotal + '€'}</div>
                </Link>
            </nav>
        </div>
    );
}

Navbar.propTypes = {
    quantity: PropTypes.number.isRequired,
    currentTotal: PropTypes.number.isRequired,
};

export default Navbar