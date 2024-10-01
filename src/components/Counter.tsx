import { useEffect } from 'react';

import { increment, selectCount } from '../store/counterSlice.ts';
import { useAppDispatch, useAppSelector } from '../hooks/storeHooks.ts';

function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  useEffect(() => {});

  return (
    <div className="card">
      <button onClick={() => dispatch(increment())}>count is {count}</button>
    </div>
  );
}

export default Counter;
