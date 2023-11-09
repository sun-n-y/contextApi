import { useCustomHook2 } from './context2';

const App3 = () => {
  const { name } = useCustomHook2();
  return <div>{name}</div>;
};
export default App3;
