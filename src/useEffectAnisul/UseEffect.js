import React, { useEffect, useState } from 'react';

const UseEffect = () => {
    const [count, setcout]=useState(0);

 useEffect(()=>{
    console.log("useEffect");
 },[])

    const handleCount=()=>{
        setcout((count)=>count+1);
    };
    return (
        <div>
            {console.log("rendering")}
            <h4> the nubmer is = {count}</h4>
            <button onClick={handleCount}>+</button>
        </div>
    );
};

export default UseEffect;