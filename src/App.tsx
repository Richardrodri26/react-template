import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Router, RouterProvider } from '@tanstack/react-router';
// Import the generated route tree
import { routeTree } from './routeTree.gen';
import DynamicGlobalStyle from './styles';
import { UtilGlobalClassStyle } from '@css/GlobalStyled';

// react query ----------------------------------------------
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry: false,
    },
  },
});

// Create a new router instance
export const router = new Router({ routeTree });

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <DynamicGlobalStyle />
      <UtilGlobalClassStyle />
    </QueryClientProvider>
  );
}

export default App;
