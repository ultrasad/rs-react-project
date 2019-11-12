import React, {useState, useEffect} from 'react';
import joi from 'joi-browser'

const schema = joi.object({
    username: joi.string().min(3).required(),
    password: joi.string().min(3).required()
})

export default function Form(){

    const [counter, setCounter] = useState(0);
    //const [name, setName] = useState('hanajung');
    
    //const [username, setUsername] = useState('');
    //const [password, setPassword] = useState('');

    const [user, setUser] = useState({});
    const [messages, setMessages] = useState([]);
    const [dirties, setDirties] = useState([]);

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
        });
    }

    /* function errorMessage(field){
        //return messages.filter(each => { //return true or false
          //  return field === each.field
        //})

        const found = messages.find(each => {
            return field === each.field
        });

        return found ? found.message : '';
    } */

    useEffect(() => {
        const {error} = joi.validate(user, schema, {abortEarly: false}) //abortEarly valid all
        if(error){
            /* error.details.map((each, idx) => {
                console.log("error => ", each);
            }) */

            console.log("error: ", JSON.stringify(error.details))

            const xxy = error.details
            .map(each => {
                //return each.messages
                return {
                    message: each.message,
                    field: each.context.key
                }
            }) // return [{field: 'username', message: 'error message'}], use errorMessage for change to string error message
            .reduce((acc, each) => {
                console.log("reduce acc => ", acc);
                if(acc[each.field]){ //first error exists, return fiest error
                    return acc;
                } else {
                    return {
                        ...acc,
                        [each.field]: each.message
                    }
                }
            }, {})

            setMessages(xxy)
            //setMessages(error.details)
        } else {
            setMessages([])
        }

        setDirties(Object.keys(user)) //extract key of user object
    }, [user]);

    useEffect(() => {
        console.log("Load Once"); //first load (01)
    });

    useEffect(() => {
        console.log("OK"); //first load (01)

        return () => { //work with dependency before (01)
            console.log("xxx");
        }

    //}) //effect all dependency (1)
    //}, [name, counter]) //effect with dependency, in case => (name, counter) (2)
    //}, []) //effect only first one (3)
    },[counter]); //work with dependency counter

    return (
        <div>
            <h1>New Counter: {counter}</h1>
            <div><button onClick={updateCounter}>Update new counter</button></div>
            
            <hr />
            <h1 className="title">Form</h1>
            {/*<p>{username}, {password}</p>*/}
            {dirties}
            <p>User: {JSON.stringify(user)}</p>
            <p>Error: {JSON.stringify(messages)}</p>
            <div className="field">
                <div className="control">
                    <input type="text" name="username" className="input is-primary" onChange={handleChange} placeholder="username" />
                    {/*<p className="help is-danger">{errorMessage('username')}</p>*/}
                    <p className="help is-danger">{dirties.includes('username') ? messages['username']:''}</p>
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <input type="password" name="password" className="input is-primary" onChange={handleChange} placeholder="password" />
                    {/*<p className="help is-danger">{errorMessage('password')}</p>*/}
                    <p className="help is-danger">{dirties.includes('password') ? messages['password']:''}</p>
                </div>
            </div>
        </div>
    )
}