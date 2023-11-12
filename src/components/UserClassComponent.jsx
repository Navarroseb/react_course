import { Component } from "react";

class UserClassComponent extends Component {
    componentDidMount() {
        (async () => {
            const API_URL = 'https://reqres.in/api/users?per_page=20'
            const temp = await fetch(API_URL).then(response => response.json())
            console.log(temp)
        })();
      
    }

    render() {
        return (
            <>
              <h3>Users List</h3>
              {/* {usersList.length === 0 && <h4>No hay ususarios para mostrar</h4>}
              {usersList.length > 0 && (
                <ul>
                  {usersList.map(user => <UserData oneUser={user} />)}
                </ul>
              )} */}
        
            </>
          )
    }
}

export default UserClassComponent;