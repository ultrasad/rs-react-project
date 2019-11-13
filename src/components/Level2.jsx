import React from 'react';
import Level3 from '../components/Level3'

export default function Level2({counter=0, resetCounter}){
    return (
        <div className="box">
            <h1 className="title">Props Level 2</h1>
            <hr />
            <Level3 counter={counter} resetCounter={resetCounter} />
        </div>
    )
}