import { FileRoute, Navigate } from '@tanstack/react-router';

export const Route = new FileRoute('/').createRoute({
  component: () => {
    

    return <Navigate to='/test' />;
  },
});
