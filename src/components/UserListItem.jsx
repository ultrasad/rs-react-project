import React from 'react';
//import Level2 from '../components/Level2'

export default function UserListItem({userItem={}, addDeleteUser}){
    return (
        <div className="list">
            {/*
            {userItem.id}: {userItem.name} - {userItem.userName}
            <p>Company: {userItem.company.name}</p>
            <hr />
            <a href={"#" + userItem.id} onClick={() => addDeleteUser(userItem.id)} className="delete is-small">&nbsp;</a>
            */}

            <div className="notification is-info">
                <button className="delete" onClick={() => addDeleteUser(userItem.id)} ></button>
                <h4>User List Item</h4>
                {userItem.id}: {userItem.name} - {userItem.username}
            </div>

        </div>
    )
}