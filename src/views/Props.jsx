import React from 'react';
//import Level1 from '../components/Level1';
import Clock from '../components/Clock';

export default function Props(props){

    //console.log(props);
    /* 
        const [counter, setCounter] = useState(1);

        function handleClick(){
            setCounter(counter + 1)
        }

        function resetCounter(){
            setCounter(1);
        }
    */
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
            <hr />
            <Level1 counter={counter} resetCounter={resetCounter} />
            */}
        </div>
    )
}