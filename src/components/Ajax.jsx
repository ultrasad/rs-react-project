import React, {useState, useEffect} from 'react';
import axios from 'axios';

//import UserList from '../components/UserList';
//const url = 'https://jsonplaceholder.typicode.com/users';

export default function Ajax({children, url}){

    const [data, setData] = useState([]);

    useEffect(() => {
        console.log("use effect...");
        getdata(); //not use async in useEffect
    }, []);

    async function getdata(){
        const res = await axios.get(url);
        console.log(res.data);
        setData(res.data);
    }

    /* async function handleClick(){

        const res = await axios.get(url);
        console.log(res.data);
        setUser(res.data)

        console.log("OK...");
    }

    function deleteList(){
        console.log("delete list");
    } */
    
    return (
        <>
            {children(data)}
        </>
    )
}
