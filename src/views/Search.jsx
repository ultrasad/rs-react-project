import React, {useState} from 'react';
import axios from 'axios';
import _ from 'lodash';

//import Level2 from '../components/Level2'

const url = 'https://jsonplaceholder.typicode.com/users';



export default function Search(){

    //const [search, setSearch] = useState('');
    const [user, setUser] = useState([]);
    const [debounceSearch] = useState(() => _.debounce(searchUser, 1000))

    function handleChange(e){
        console.log("search change => ", e.target.value);
        //setSearch(e.target.value);

        debounceSearch(e.target.value);

        //const query = e.target.value;
        //console.log('change...');
    }

    /* async function handleClick(){
        console.log("click search => " + url + "?q=" + search); //gwen
        const res = await axios.get(`${url}?q=${search}`)
        console.log(res.data);
        setUser(res.data)
    } */

    function handleClick(){
        console.log('click...');
    }

    async function searchUser(search){
        console.log("click search => " + url + "?q=" + search); //gwen
        const res = await axios.get(`${url}?q=${search}`)
        console.log(res.data);
        setUser(res.data)
    }

    /* function debounceSearch(e){
        //return _.debounce(handleChange, 1000);
        console.log('XXX');
    } */

    return (
        <div>
            <h1 className="title">Search</h1>
            <div className="field">
                Search: {/*search*/}
                <input typr="text" onChange={handleChange} className="input" />
                <p>
                    <button className="button" onClick={handleClick}>Search</button>
                </p>
                <hr />
                {JSON.stringify(user)}
            </div>
        </div>
    )
}