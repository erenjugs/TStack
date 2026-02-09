// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders T3Stack title', () => {
    render(<App />);
    const titleElement = screen.getByText(/T3Stack/i);
    expect(titleElement).toBeInTheDocument();
});
