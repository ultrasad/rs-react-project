import React from 'react';
//import axios from 'axios';

import Ajax from '../components/Ajax';
import UserList from '../components/UserList';

//import UserList from '../components/UserList';
//import UserList from '../components/UserList';

const url = 'https://jsonplaceholder.typicode.com/users';

export default function User(){
    return (
        <div className="">
            <h1>User</h1>
            <hr />
            <Ajax url={url}>
                {(data) => { //send function
                    //return <pre>{JSON.stringify(data)}</pre>
                    return <UserList userList={data} />
                }}
            </Ajax>
        </div>
    )
}
