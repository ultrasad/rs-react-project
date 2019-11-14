import React, {useReducer} from 'react';

const initState = {
    qty: 1,
    text: 'Avalible'
}

const reducer = (state, action) => {
    console.log(action);

    switch(action.type){
        case 'DEPOSIT':
            return {...state, qty: state.qty + action.qty, text: 'Avalible'}
        case 'WITHDRAW':
            return {
                ...state, 
                qty: action.qty >= state.qty ? 0 : (state.qty - action.qty),
                text: action.qty >= state.qty ? 'Empty': 'Avalible'
            }
        default:
            return state
    }
    
    //return state
}

//WITHDRAW
//DEPOSIT

//action
const deposit = (qty = 1) => ({ //return object
    type: 'DEPOSIT',
    //payload: qty
    qty
})

//action
const withdraw = (qty = 1) => ({ //function retrurn obj
    type: 'WITHDRAW',
    qty
})

export default function About(){

    const [state, dispatch] = useReducer(reducer, initState)

    return (
        <div>
            <h1>About Page</h1>
            <p>
                <button onClick={() => dispatch(deposit(5))} className="button is-success">Deposit</button> |
                <button onClick={() => dispatch(withdraw(3))} className="button is-danger">Withdraw</button>
            </p>
            <pre>{JSON.stringify(state)}</pre>
        </div>
    )
}