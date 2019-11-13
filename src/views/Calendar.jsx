import React, {useState, useRef, useEffect} from 'react';
import Pikaday from 'pikaday';
import 'pikaday/css/pikaday.css';

export default function Calendar(){ 

    const inputField = useRef(null);
    const inputField2 = useRef(null);

    const [date, setDate] = useState(new Date());
    const [toDate, setToDate] = useState(new Date());

    useEffect(() => {
        const c1 = new Pikaday({
            field: inputField.current,
            onSelect(date){
                //console.log("selected: ", date);
                setDate(date);
            }
        });

        const c2 = new Pikaday({
            field: inputField2.current,
            onSelect(toDate){
                //console.log("selected: ", date);
                setToDate(toDate);
            }
        });

        return () => {
            c1.destroy()
            c2.destroy()
        }

        //console.log('input: ', inputField.current);
    }, []);

    return (
        <div className="title">
            <h1>Calendar</h1>
            <hr />
            <p className="title">{date.toString()} to {toDate.toString()}</p>
            <hr />
            <input ref={inputField} className="input" type="text" /> To <input ref={inputField2} className="input" type="text" />            
        </div>
    )
}