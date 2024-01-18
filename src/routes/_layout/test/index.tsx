import { FileRoute } from '@tanstack/react-router';

const Test = () => {
  return <div>Este componente es de prueba 1</div>;
};

export const Route = new FileRoute('/_layout/test/').createRoute({
  component: Test,
});
