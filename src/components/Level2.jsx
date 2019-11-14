import React, {useContext} from 'react';
import Level3 from '../components/Level3'

import LanguageContext from '../context/LanguageContext';

export default function Level2({counter=0, resetCounter}){

    const { language } = useContext(LanguageContext);

    return (
        <div className="box">
            <h1 className="title">Props Level 2 : Language: {language}</h1>
            <hr />
            <Level3 counter={counter} resetCounter={resetCounter} />
        </div>
    )
}