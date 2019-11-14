import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

/* function mapStateToProps(state){ //state => state
    return state
} */

//connect(state => state) //same
//connect(mapStateToProps) //same

/*
const xxx = connect(state => state)
xxx()
*/

const url = 'https://jsonplaceholder.typicode.com/users';

function mapStateToProps(state){ //state => state
    //return state //return all
    return {
        u: state.u
    }
} 

/* const getUsers = async() => { //for static data

    const res = await axios(url)
    return {
        type: 'ADD_USER',
        data: res.data
    }
} */

const getUsers = () => async (dispatch) => { //for async function

        const res = await axios(url)

        dispatch({
            type: 'USER_ADD',
            data: res.data
        })
}

export default connect(mapStateToProps)(function Contact({u, dispatch }){ //get state in redux to props, filter with mapStateToProps
    console.log("props => ", u);

    return (
        <div>
            <h1>Contact Page | REDUX</h1>
            <pre>{JSON.stringify(u.users)}</pre>
            <p>
                <button className="button" onClick={() => dispatch(getUsers())}>Get Users</button>
            </p>
        </div>
    )
})

/* export default connect(mapStateToProps)(function Contact(props){ //get state in redux to props, filter with mapStateToProps
    console.log("props => ", props);

    return (
        <div>
            <h1>Contact Page | REDUX</h1>
            <pre>{JSON.stringify(props.u.users)}</pre>
        </div>
    )
}) */

/* export default connect(state => state)(function Contact(props){ //get state in redux to props (all)
    console.log(props);

    return (
        <div>
            <h1>Contact Page | REDUX</h1>
            <pre>{JSON.stringify(props.numbers)}</pre>
            <pre>{JSON.stringify(props.n.numbers)}</pre>
        </div>
    )
}) */