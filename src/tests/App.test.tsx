import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '@/App';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Helper function to wrap App with necessary context
const renderWithProviders = (ui: React.ReactElement, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(ui, { wrapper: BrowserRouter });
};

describe('App Component', () => {
  test('renders Dashboard component by default', () => {
    renderWithProviders(<App />);
    expect(screen.getByText('Hello Component works!')).toBeInTheDocument();
  });

  test('navigates to UserList component', async () => {
    const queryClient = new QueryClient();
    const element: React.ReactElement = (
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    );
    renderWithProviders(element, { route: '/users' });
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Users');
  });
});
