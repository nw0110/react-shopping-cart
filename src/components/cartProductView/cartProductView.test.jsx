import {describe, expect, it} from "vitest";
import {render, screen} from "@testing-library/react";
import CartProductView from "./cartProductView.jsx";

describe('CartProductView', () => {
    it('renders CartProductView', () => {
        const product = {
            image: 'https://test',
            title: 'TestProduct'
        }
        const quantity = 10;

        render(<CartProductView product={product} quantity={quantity}/>);
        const productImage = screen.getByRole("img");
        expect(productImage).toHaveAttribute("width", "64");
        expect(screen.getByText("Quantity: 10")).toBeInTheDocument();
        expect(screen.getByText("TestProduct")).toBeInTheDocument();
    });
});