import {render} from '@testing-library/react';
import {describe, it, expect, vi} from 'vitest';

import Navbar from "./navbar.jsx";

vi.mock('react-router-dom', () => ({
    Link: ({ children, to }) => <a href={to}>{children}</a>
}));

describe('Navbar', () => {
    it('renders Navbar', () => {
        const { container } = render(<Navbar quantity={12} currentTotal={12}/>);
        expect(container).toMatchSnapshot();
    });
});