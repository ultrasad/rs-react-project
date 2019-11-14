import React, {useEffect, useState} from 'react';
//import {Link} from 'react-router-dom';
import Noty from 'noty';
import 'noty/lib/noty.css';
import 'noty/lib/themes/nest.css';

import firebaseApp from '../firebase';

export default function Firebase(){

    const [counter, setCounter] = useState(0);

    function  handleClick(){
        console.log('click..');
        const ref = firebaseApp.database().ref('/foo');
        ref.set(counter + 1);
    }

    useEffect(() => {
        const ref = firebaseApp.database().ref('/foo');
        //console.log('firebase ref => ', ref);

        ref.on('value', ss => {
            console.log("effect ss: ", ss.val());

            setCounter(ss.val() ? ss.val() : 0);

            new Noty({
                text: `Counter: ${ss.val()}`,
                theme: 'nest',
                timeout: 2000
            }).show()
        });

        return () => {
            console.log('effect return..');
            if(ref){
                ref.off() //un subscribe
            }
        }

    }, []);

    return (
        <div className="">
            <h1>Firebase</h1>
            <hr />
            <button className="button" onClick={handleClick}>Click</button>
            <hr />
            {counter}
        </div>
    )
}