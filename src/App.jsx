import './App.module.css'
import {Outlet} from "react-router-dom";
import Navbar from "./components/navbar/navbar.jsx";
import {useState} from "react";

function App() {
    const [productData, setProductData] = useState(null);
    const [cartData, setCartData] = useState([]);

    const total = cartData.reduce((acc, item) => {
        const product = productData?.find(p => p.id === item.id);
        return acc + (product ? product.price * item.quantity : 0);
    }, 0);

    const totalQuantity = cartData.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <>
            <Navbar quantity={totalQuantity} currentTotal={total}/>
            <Outlet context={{productData, setProductData, cartData, setCartData }} />
        </>
    )
}

export default App
