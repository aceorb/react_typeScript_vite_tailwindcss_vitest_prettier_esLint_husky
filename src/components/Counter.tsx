import { useEffect, useState } from 'react';

function Counter({ initCount }: { initCount: number }) {
  const [count, setCount] = useState(initCount);
  useEffect(() => {});

  return (
    f
    <div className="card">
      dfefef
      <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
    </div>
  );
}

export default Counter;
