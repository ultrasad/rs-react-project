import React, {useState} from 'react';
import axios from 'axios';

import UserList from '../components/UserList';

const url = 'https://jsonplaceholder.typicode.com/users';

export default function User(){

    const [user, setUser] = useState([]);

    async function handleClick(){
        /* const  data = axios.get(url);
        data.then(res => {
            console.log(res.data);
        }); */

        const res = await axios.get(url);
        //const res2 = await axios.get(url);
        console.log(res.data);
        //console.log(res2.data);
        setUser(res.data)

        console.log("OK...");
    }

    function deleteList(){
        console.log("delete list");
    }
    
    return (
        <div className="">
            <h1>User</h1>
            <hr />
            {/*JSON.stringify(user)*/}
            
            <button className="button" onClick={handleClick}>Get User</button>

            <hr />
            <UserList userList={user} deleteList={deleteList} />
        </div>
    )
}
