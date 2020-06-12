import React, {useState, useEffect} from 'react';
import Level1 from '../components/Level1';
import Clock from '../components/Clock';

import LanguageContext from '../context/LanguageContext';

export default function Props(props){

    //console.log(props);
    
        const [counter, setCounter] = useState(2);
        const [language, setLanguage] = useState('th');

        /* function handleClick(){
            setCounter(counter + 1)
        } */

        function resetCounter(){
            console.log('reset counter, props.');
            setCounter(1);
        }

        function toggleLanguage(){
            setLanguage(language === 'th' ? 'en': 'th');
        }

        useEffect(() => {
            console.log('props active, counter: ', counter);
            return () => {
                console.log('Unmount inside useEffect, Props');
            }
        }, [counter]);
   

   //const [counter, setCounter] = useState(1);

    return (
        <div className="box">

            <Clock>{(nowString) => {
                return <h1 className="title">{nowString}</h1>
            }}</Clock>
            
            {/* <Clock>
            {(props) => {
                return <h1 className="title">{props.toString()}</h1>
            }}
            </Clock> */}

            {/* <Clock>
                <p>Hello</p>
                <p>World</p>
            </Clock> */}
            
            {/*
            <h1 className="title">Props Page | Counter: {counter}</h1>
            <p><button onClick={handleClick} className="button">Update!</button></p>
            <hr />
            <p><button onClick={resetCounter} className="button is-danger">Reset Counter from Main!</button></p>
            <hr />*/}
            <p>
                <button className="button" onClick={toggleLanguage}>{language === 'th' ? 'en' : 'th'}</button>
            </p>
            <LanguageContext.Provider value={{language, toggleLanguage}}>
                <Level1 counter={counter} resetCounter={resetCounter} />
            </LanguageContext.Provider>
            
        </div>
    )
}