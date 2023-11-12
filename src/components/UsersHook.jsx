import { useState } from "react";
import UserData from "./UserData";

const UsersHook = () => {
    const [usersList, setUsersList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    
    return (
        <>
            <h3>Users List</h3>
            {isLoading && <h4>Cargando...</h4>}
               {!isLoading && (
                <ul>
                  {usersList.map(user => <UserData oneUser={user} />)}
                </ul>
              )}  
        </>
    )
}

export default UsersHook;