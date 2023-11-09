import { useCustomHook } from './context';

const App3 = () => {
  const value = useCustomHook();
  console.log(value);
  return <div>App3 </div>;
};
export default App3;
