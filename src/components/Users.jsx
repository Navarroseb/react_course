import PropTypes from "prop-types";
import UserData from './UserData';


function Users({ usersList }) {

  return (
    <>
      <h3>Users List</h3>
      {usersList.length === 0 && <h4>No hay ususarios para mostrar</h4>}
      {usersList.length > 0 && (
        <ul>
          {usersList.map(user => <UserData oneUser={user} />)}
        </ul>
      )}

    </>
  )
}

Users.protoTypes = {
  usersList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      first_name: PropTypes.string,
      last_name: PropTypes.string,
      email: PropTypes.string

    }.isRequired)
  ),
}

export default Users