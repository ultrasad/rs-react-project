import React, {useState, useEffect, useContext} from 'react';

import LanguageContext from '../context/LanguageContext';

export default function Level3({counter=0, resetCounter}){ //set default initial with {params}
    
    const[localCounter, setLocalCounter] = useState(counter);

    const { language, toggleLanguage } = useContext(LanguageContext);

    function handleClick(){
        setLocalCounter(localCounter + 1)
    }
    
    //update by effect main counter
    useEffect(() => {
        setLocalCounter(counter)
    }, [counter]);

    return (
        <div className="box">
            <h1 className="title">Props Level 3 | Local Counter: {counter} - {localCounter} | Lanaguage: {language}</h1>
            <p><button onClick={handleClick} className="button">Update Local</button> | <button onClick={toggleLanguage} className="button">Toggle Language</button></p>
            <hr />
            <p><button onClick={resetCounter} className="button is-warning">Reset Counter from Lv3!</button></p>
        </div>
    )
}