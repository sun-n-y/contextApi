import { useCustomHook } from './App2';

const Level2 = () => {
  const { color, showColor } = useCustomHook();

  return <div>{color}</div>;
};
export default Level2;
