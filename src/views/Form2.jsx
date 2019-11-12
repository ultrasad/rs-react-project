import React from 'react';
import {rulesMapper, useValidation} from '../hooks/validation';

/* const rules = {
    username: 'string',
    password: 'string'
} */

/* const schema = {
    username: 'string',
    password: 'string'
} */

const schema = rulesMapper({
    username: 'string', //'string|3digit'
    password: 'string'
})

export default function Form(){

    //const [user, setUser, messages] = useValidation({})
    //const [user, setUser, messages] = useValidation({}, rules)
    const [user, setUser, messages] = useValidation({}, schema)

    return (
        <div>
            
            <h1 className="title">Form2</h1>
            <p>{JSON.stringify(user)}</p>
            <div className="field">
                <div className="control">
                    <input type="text" name="username" onChange={setUser} className="input is-primary" placeholder="username" />
                    {/* <p className="help is-danger">{dirties.includes('username') ? messages['username']:''}</p> */}
                    <p className="help is-danger">{messages['username']}</p> 
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <input type="password" name="password" onChange={setUser}  className="input is-primary" placeholder="password" />
                    {/* <p className="help is-danger">{dirties.includes('password') ? messages['password']:''}</p> */}
                    <p className="help is-danger">{messages['password']}</p> 
                </div>
            </div>
        </div>
    )
}