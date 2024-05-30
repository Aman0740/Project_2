import React, { useState } from 'react';
import './App.css';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <div className="counter-container">
            <h1>COUNTER</h1>
            <div className="count">{count}</div>
            <div className="buttons">
                <button className="decrement" onClick={decrement}>Decrement</button>
                <button className="reset" onClick={reset}>Reset</button>
                <button className="increment" onClick={increment}>Increment</button>
            </div>
        </div>
    );
}

export default Counter;
