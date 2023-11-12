import { useState, useEffect } from "react";
import UserData from "./UserData";

const UsersHook = () => {
    const [usersList, setUsersList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [value, setValue] = useState(0);


    useEffect(() => {
        (async () => {
            const API_URL = 'https://reqres.in/api/users?per_page=2&page=1'
            const { data } = await fetch(API_URL).then(response => response.json())
            setUsersList(data);
            setIsLoading(false);
                      
        })();
    }, []);

    
    
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