import { useCustomHook10 } from './context3';

const App5 = () => {
  const { name } = useCustomHook10();
  return <div>{name}</div>;
};
export default App5;
