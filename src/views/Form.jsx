import React, {useState, useEffect} from 'react';

export default function Form(){

    const [counter, setCounter] = useState(0);
    //const [name, setName] = useState('hanajung');
    
    //const [username, setUsername] = useState('');
    //const [password, setPassword] = useState('');

    const [user, setUser] = useState({});

    function updateCounter(){
        setCounter(counter + 1);
    }

    /*
    function updateUsername(e){
        setUsername(e.target.value)
    }

    function updatePassword(e){
        setPassword(e.target.value)
    }
    */

    function handleChange(e){
        const name = e.target.name;
        const value = e.target.value;

        setUser({
            ...user,
            [name]: value, 
        })
    }

    useEffect(() => {
        console.log("Load Once"); //first load (01)
    })

    useEffect(() => {
        console.log("OK"); //first load (01)

        return () => { //work with dependency before (01)
            console.log("xxx");
        }

    //}) //effect all dependency (1)
    //}, [name, counter]) //effect with dependency, in case => (name, counter) (2)
    //}, []) //effect only first one (3)
    },[counter]) //work with dependency counter

    return (
        <div>
            <h1>New Counter: {counter}</h1>
            <div><button onClick={updateCounter}>Update new counter</button></div>
            
            <hr />
            <h1 className="title">Form</h1>
            {/*<p>{username}, {password}</p>*/}
            {JSON.stringify(user)}
            <div className="field">
                <div className="control">
                    <input type="text" name="username" className="input is-primary" onChange={handleChange} placeholder="username" />
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <input type="password" name="password" className="input is-danger" onChange={handleChange} placeholder="password" />
                </div>
            </div>
        </div>
    )
}