import React, { useState } from 'react';

const UseEffect = () => {
    const [count, setcout]=useState(0);
    const handleCount=()=>{

    };
    return (
        <div>
            <h4> the nubmer is = {count}</h4>
            <button onClick={handleCount}>Add nubmer</button>
        </div>
    );
};

export default UseEffect;