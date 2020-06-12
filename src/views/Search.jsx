import React, {useState, useEffect, useCallback, memo} from 'react';
import axios from 'axios';
import _ from 'lodash';

//import Level2 from '../components/Level2'

//const url = 'https://jsonplaceholder.typicode.com/users';
const url = 'https://hn.algolia.com/api/v1/search';

/* const MemoizedChild = memo(({ callback }) => {
    console.log("re-render child component.");
    const [value, setValue] = useState(0);

    useEffect(() => {
        console.log('change child effect..');
        setValue(value + 1);
    }, [callback]);

    return (<p>Child: {value}</p>);
 }); */

const ExampleChild = ({ callbackFunction, count }) => {
    console.log("re-render example child component.");
    const [value, setValue] = useState(0);
    
    useEffect(() => {
        console.log('change example child effect..');
        setValue(count);
        callbackFunction(count + 3);
    }, [callbackFunction, count]);

    //const value = callbackFunction(value);
    return (<p>ExampleChild: {value}</p>);
}

//it work
const Child = memo(({ reset, value }) => {
    console.log("re-render memo child component.");

    useEffect(() => {
        console.log('change memo child effect..');
    }, [value]);

    return (
        <div>
        <p>Child: {value}</p>
        {/* <p>child component which resets count</p> */}
        <button onClick={reset}>Reset Count</button>
        </div>
    );
});

export default function Search(){

    //const [search, setSearch] = useState('');
    const [user, setUser] = useState([]);
    const [debounceSearch] = useState(() => _.debounce(searchUser, 1000));

    const [count, setCount] = useState(0);
    const [another, setAnother] = useState(0);

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

    const handleClick = () => {
        // do something!
        console.log('handle click...');
    }

    const resetCount = useCallback(() => {
        setCount(0);
    }, [setCount]);    

    const countCallback = useCallback((countX) => {
        console.log('countX callback...', countX);
        return count;
    }, [count]);

    async function searchUser(search){
        /*console.log("click search => " + url + "?q=" + search); //gwen
        const res = await axios.get(`${url}?q=${search}`);
        console.log(res.data);
        setUser(res.data);*/

        console.log("click search with new url => " + url + "?query=" + search); //gwen
        const res = await axios.get(`${url}?query=${search}`);

        console.log(res.data.hits[0]);
        setUser(res.data.hits[0]);
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

            <ExampleChild callbackFunction={countCallback} count={count} />

            <Child reset={resetCount} value={count} />

            <button onClick={() => setCount(count + 1)}>
                Change callback
            </button>
            <button onClick={() => setAnother(another + 1)}>
                Do not change callback
            </button>
        </div>
    );
}