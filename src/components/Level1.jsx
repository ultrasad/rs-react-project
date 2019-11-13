import React, {useEffect} from 'react';
import Level2 from '../components/Level2'

export default function Level1({counter=0, resetCounter}){

    //console.log(props);

    useEffect(() => {
        console.log('V1 OK..');
    })

    return (
        <div className="box">
            <h1 className="title">Props Level 1| Main Counter: {counter}</h1>
            <hr />
            <p><button onClick={resetCounter} className="button is-primary">Reset Counter from Lv1!</button></p>
            <hr />
            <Level2 counter={counter} resetCounter={resetCounter} />
        </div>
    )
}