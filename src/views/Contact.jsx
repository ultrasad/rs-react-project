//import React, { useState, useEffect } from 'react';
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
        user: state.user
    }
} 

/* const getUsers = async() => { //for static data

    const res = await axios(url)
    return {
        type: 'ADD_USER',
        data: res.data
    }
} */

//ok with thunk
const getUsers = () => async (dispatch) => { //for async function

        const res = await axios(url);

        dispatch({
            type: 'USER_ADD',
            data: res.data
        });
}

/* const getUsers = () => {
    return async function(dispatch){
        return await axios(url)
        .then(data => {//without thunk
            return dispatch({
                type: 'USER_ADD',
                data: data
            });
        })
        .catch(err => {
            console.log('fetch err: ', err);
        });
    }
} */

const Contact = ({user, dispatch }) => { //get state in redux to props, filter with mapStateToProps
    console.log("props => ", user);

    /* const [data, setData] = useState(null);
    useEffect(() => {
        function getFetchUrl() {
            return "https://hn.algolia.com/api/v1/search?query=react";
        }
        async function fetchData() {
            console.log("asdasd");
            const result = await axios(getFetchUrl());
            setData(result.data);
        }

        fetchData();
    }, []); */

    return (
        <div>
            <h1>Contact Page | REDUX</h1>
            <pre>{JSON.stringify(user.users)}</pre>
            {/* <pre>{JSON.stringify(data)}</pre> */}
            <p>
                <button className="button" onClick={() => dispatch(getUsers())}>Get Users</button>
            </p>
        </div>
    )
}

export default connect(mapStateToProps)(Contact)

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