import React, { useReducer } from 'react';
import Button from '../../components/button';

import { reducer } from './store/reducer';

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const { counter } = state;

  return (
    <div className="flex flex-center">
      <div className="flex-column counter-wrapper">
        <h1>A click counter</h1>

        <div className="counter">{counter}</div>

        <div className="flex">
          <Button
            className="btn btn-primary"
            onClick={() => dispatch({ type: 'increase' })}
            icon={<span>&#43;</span>}
          />
          <Button
            className="btn btn-primary"
            onClick={() => dispatch({ type: 'decrease' })}
            icon={<span>&#8722;</span>}
          />
        </div>
      </div>
    </div>
  );
}
