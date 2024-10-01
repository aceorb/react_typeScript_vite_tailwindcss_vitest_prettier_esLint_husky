import { useEffect, useState } from 'react';

function Counter({ initCount }: { initCount: number }) {
  const [count, setCount] = useState(initCount);
  useEffect(() => {});

  return (
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
    </div>
  );
}

export default Counter;
