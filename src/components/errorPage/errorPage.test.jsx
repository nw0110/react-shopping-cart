import {render, screen} from '@testing-library/react';
import {describe, it, expect, vi} from 'vitest';

import ErrorPage from './errorPage.jsx';

vi.mock('react-router-dom', () => ({
    Link: ({ children, to }) => <a href={to}>{children}</a>
}));

describe('ErrorPage', () => {
    it('renders headline', () => {
        render(<ErrorPage/>);
        expect(screen.getByRole("heading").textContent).toMatch(/oops, an error occured/i);
    });
});