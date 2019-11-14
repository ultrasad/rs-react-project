//import React, {useState, memo} from 'react'; //memo => hoc
//import React, {useState, useMemo} from 'react'; //memo => hoc
import React, {useRef, forwardRef, useImperativeHandle} from 'react';
import { connect } from 'react-redux' 

/* function Child(){
    console.log('render');
    return <h1 className="title">Child</h1>
} */

/* const Child = memo(function(){ //wrap with momolize, change only props change, not load all the time
    console.log('render');
    return <h1 className="title">Child...</h1>
}) */

/* function expensiveCompute(counter){
    return Math.round(Math.random() * 100 + 100);
}

function Child({counter}){
    //const number = expensiveCompute();
    const number = useMemo(() => expensiveCompute(counter), [counter]); //like memo, focus function

    console.log("counter: ", counter);

    return (<h1 className="title">Child | {number}</h1>);
} */

//forwardRef, เซ็ตการเข้าถึง element ตัวลูก ที่มี hidden function ให้เรียกใช้

const Child = forwardRef(function (props, ref){
    const inputFieldRef = useRef(null)
    useImperativeHandle(ref, () => ({
        setFocus(){
            console.log('focus input');
            inputFieldRef.current.focus();
        }
    })) //function return obj

    return (<input ref={inputFieldRef} type="text" className="input" />)
})

const addItem = () => ({
    type: 'ADD'
})

const deleteItem = () => ({
    type: 'DELETE'
})

export default connect()(function Home({dispatch}){

    /* const [counter, setCounter] = useState(1);

    function handleClick(){
        setCounter(counter + 1);
    } */

    console.log('dispatch: ', dispatch);

    const childComponentRef = useRef(null);

    function  handleFocus(){
        //console.log(childComponentRef.current);
        childComponentRef.current.setFocus();
    }

    function handleAddRedux(){
        dispatch(addItem())
    }

    function handleDeleteRedux(){
        dispatch(deleteItem())
    }

    return (
        <div>
            <div>Home Page | Parent</div>
            {/*
            {counter}
            <hr />
            <button className="button" onClick={handleClick}>Update | {counter}</button>
            <hr />
            <Child counter={counter} />
            <Child counter={1} />
            */}
            <p>
            <button className="button" onClick={handleFocus}>Focus</button> | 
            <button className="button" onClick={handleAddRedux}>Add Redux Item</button> | 
            <button className="button" onClick={handleDeleteRedux}>Delete Redux Item</button>
            </p>
            <hr />

            <Child ref={childComponentRef} />

        </div>
    )
})
