import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../api';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers().then(setUsers);
    }, []);

    return (
        <div>
            <h2>Users List</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name} - {user.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default Users;
