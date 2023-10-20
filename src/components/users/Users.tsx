import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { User } from './types';

export const Users = () => {
  const [users, setUsers] = useState<User[]>([]);

  const loadUsers = async () => {
    try {
      const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (err) {
      console.error({ err });
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div data-testid="users-page">
      {users.map((user) => (
        <React.Fragment key={user.id}>
          <div data-testid="user-item">{user.name}</div>
          <Link to={`/users/${user.id}`} data-testid="user-link">
            link
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
};
