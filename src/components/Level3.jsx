import React, {useState, useEffect} from 'react';

export default function Level3({counter=0, resetCounter}){ //set default initial with {params}
    
    const[localCounter, setLocalCounter] = useState(counter);

    function handleClick(){
        setLocalCounter(localCounter + 1)
    }
    
    //update by effect main counter
    useEffect(() => {
        setLocalCounter(counter)
    }, [counter]);

    return (
        <div className="box">
            <h1 className="title">Props Level 3 | Local Counter: {counter} - {localCounter}</h1>
            <p><button onClick={handleClick} className="button">Update Local</button></p>
            <hr />
            <p><button onClick={resetCounter} className="button is-warning">Reset Counter from Lv3!</button></p>
        </div>
    )
}