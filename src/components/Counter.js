import React, { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const incrementAndLog = () => {
        setCounter(counter + 1)
    }

    return(
        <div>
            <button class="ui positive button" onClick={incrementAndLog} >
                Increment
            </button>
            <button class="ui negative button" onClick={() => {setCounter(counter - 1)}}>
                Decrement
            </button>
            <p>{counter}</p>
        </div>
    ) 

}

export default Counter;

