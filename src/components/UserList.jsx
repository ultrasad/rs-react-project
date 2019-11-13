import React, {useState} from 'react';
import UserListItem from '../components/UserListItem';

export default function UserList({userList=[]}){

    const [query, setQuery] = useState('');
    const [deleteUser, setDeleteUser] = useState([]); //[3,2,1]

    function addDeleteUser(id){
        console.log("OK DEL => " + id);
        setDeleteUser([
            ...deleteUser,
            id
        ])
    }

    function handleChange(e){
        console.log("change..." + e.target.value);
        setQuery(e.target.value);
    }

    return (
        <div className="box">
            <h1>User List</h1>
            <p>{query}</p>
            <div className="field">
                <input type="text" name="name" onChange={handleChange} className="input" />
            </div>
            <p>{JSON.stringify(deleteUser)}</p>
            {/*JSON.stringify(user)*/}
            {
                userList
                .filter(each => {
                    const pattern = new RegExp(query, 'i') // => /bundit/
                    //return each.name = query
                    return pattern.test(each.name)
                })
                .filter(each => {
                    //return !deleteUser[each.id]  //true or false (movie is selected)
                    return !deleteUser.includes(each.id)
                })
                .map((each) => {
                //return <UserListItem key={id} id={id} name={name} userName={username} company={company} />
                return <UserListItem key={each.id} userItem={each} addDeleteUser={addDeleteUser} />
                })
            }
        </div>
    )
}