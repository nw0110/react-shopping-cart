import { describe, test, expect, vi, beforeEach } from 'vitest'
import createFetchMock from 'vitest-fetch-mock';
import {render, screen} from "@testing-library/react";
import CardContainer from "./cardContainer.jsx";
import {act} from "react";

const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

vi.mock("../productCard/productCard.jsx", () => {
    return {
        default: ({ product }) => <div data-testid="product-card">{product.title}</div>,
    };
});

describe('CardContainer', () => {
    beforeEach(() => {
        fetch.resetMocks(); // Reset mocks before each test
    });

    test('renders CardContainer', async () => {
        fetch.mockResponseOnce(JSON.stringify([{ id: 1, title: 'TestProduct1' }, { id: 2, title: 'TestProduct2'}]));

        const mockCartData = [
            {id: 1, quantity: 10}
        ]

        const productData = [
            {id: 1, title: 'TestProduct1'},
            {id: 2, title: 'TestProduct2'}
        ]

        const setCartData = vi.fn();
        const setProductData = vi.fn();

        render(<CardContainer cartData={mockCartData} productData={productData} setCartData={setCartData} setProductData={setProductData}/>)

        expect(await screen.findAllByTestId("product-card")).toHaveLength(2);
        expect(screen.queryByText("A network error was encountered")).not.toBeInTheDocument();
        expect(screen.queryByText("Loading")).not.toBeInTheDocument();
        expect(setProductData).toHaveBeenCalledTimes(1);

        expect(fetch.requests().length).toEqual(1);
    })

    test('renders error on failing fetch in CardContainer', async () => {
        fetch.mockReject(new Error('fake error message'));

        const mockCartData = [
            {id: 1, quantity: 10}
        ]

        const productData = [
            {id: 1, title: 'TestProduct1'},
            {id: 2, title: 'TestProduct2'}
        ]

        const setCartData = vi.fn();
        const setProductData = vi.fn();

        render(<CardContainer cartData={mockCartData} productData={productData} setCartData={setCartData} setProductData={setProductData}/>)

        expect(await screen.findByText("A network error was encountered")).toBeInTheDocument();
        expect(await screen.queryByText("Loading")).not.toBeInTheDocument();
        expect(setProductData).toHaveBeenCalledTimes(0);
        expect(fetch.requests().length).toEqual(1);
    })

    test('renders loading message in CardContainer', async () => {
        fetch.mockImplementation(() => new Promise(() => {}));

        const mockCartData = [
            {id: 1, quantity: 10}
        ]

        const productData = [
            {id: 1, title: 'TestProduct1'},
            {id: 2, title: 'TestProduct2'}
        ]

        const setCartData = vi.fn();
        const setProductData = vi.fn();

        render(<CardContainer cartData={mockCartData} productData={productData} setCartData={setCartData} setProductData={setProductData}/>)

        expect(await screen.queryByText("Loading...")).toBeInTheDocument();
    })
})