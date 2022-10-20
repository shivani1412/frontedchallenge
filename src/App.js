import React, { useState, useEffect } from 'react'
import GithubUsers from "./components/githubUsers";

const App = () => {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        
            const response = await fetch( "https://api.github.com/users");
            setUsers(await response.json());
        
    }

    useEffect(() => {
        getUsers();
    },);

    
    return (
        <>
            <GithubUsers users={users}/>
        </>
    )
}

export default App;