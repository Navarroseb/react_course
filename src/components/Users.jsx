import React from 'react'

function Users({usersList}) {
    
  return (
    <> 
    <h3>Users List</h3>
    <ul>
    {usersList.map(function (oneUser){
        return (
            <li>
                <h3>{`${oneUser.id} - ${oneUser.first_name} ${oneUser.last_name}`}</h3>
                <a href={`mailto:${oneUser.email}`}>{oneUser.email}</a>
            </li>
        )
            
    })}
    </ul>
    </>
  )
}

export default Users