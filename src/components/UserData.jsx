import React from 'react'

const UserData = ({ oneUser }) => {
  return (
    <>
    <li key={oneUser.id}>
                <h3>{`${oneUser.id} - ${oneUser.first_name} ${oneUser.last_name}`}</h3>
                <img src={oneUser.avatar}  />
                <br />
                <a href={`mailto:${oneUser.email}`}>{oneUser.email}</a>
            </li>
    </>
  )
}

export default UserData