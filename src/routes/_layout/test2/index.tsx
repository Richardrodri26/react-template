import { FileRoute } from '@tanstack/react-router';

const Test = () => {
  return <div>Este componente es de prueba 2</div>;
};

export const Route = new FileRoute('/_layout/test2/').createRoute({
  component: Test,
});
