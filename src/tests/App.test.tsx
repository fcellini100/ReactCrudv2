import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '@/App';

describe('App component', () => {
  test('renders "Hello world" text', () => {
    render(<App />);
    const helloWorldElement = screen.getByText(/hello world/i);
    expect(helloWorldElement).toBeInTheDocument();
    expect(helloWorldElement).toHaveClass(
      'text-3xl text-blue-950 font-bold bg-gray-300'
    );
  });
});
