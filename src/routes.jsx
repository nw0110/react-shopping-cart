import App from "./App.jsx";
import Shop from "./components/shop/shop.jsx";
import Cart from "./components/cart/cart.jsx";
import ErrorPage from "./components/errorPage/errorPage.jsx";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Shop /> },
            { path: "shop", element: <Shop /> },
            { path: "cart", element: <Cart /> },
        ]
    },
];

export default routes;