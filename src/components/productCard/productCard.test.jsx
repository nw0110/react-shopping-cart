import {describe, expect, it, vi} from "vitest";
import {render, screen} from "@testing-library/react";
import ProductCard from "./productCard.jsx";
import userEvent from '@testing-library/user-event'

vi.mock('react-router-dom', () => ({
    Link: ({ children, to }) => <a href={to}>{children}</a>
}));

describe('ProductCard', () => {
    it('renders ProductCard', async () => {
        const user = userEvent.setup()

        const mockProduct = {
            id: 1,
            image: "https://someurl",
            price: "12.99",
            title: "TestProduct",

        }

        const mockCartData = [{
            id: 1,
            quantity: 2,
        }]

        const setCartData = vi.fn();

        render(<ProductCard product={mockProduct} cartData={mockCartData} setCartData={setCartData}/>);
        await user.click(screen.getByText('+'))
        await user.click(screen.getByText('+'))
        expect(screen.getByRole('spinbutton')).toHaveValue(3);
        await user.click(screen.getByText('-'))
        expect(screen.getByRole('spinbutton')).toHaveValue(2);
    });
});