import { useEffect, useState } from 'react';
import axios from 'axios';
import { User } from './types';

export const Users = () => {
  const [users, setUsers] = useState<User[]>([]);

  const loadUsers = async () => {
    const response = await axios.get<User[]>('https://jsoplaceholder.typicode.com/users');
    setUsers(response.data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id} data-testid="user-item">
          user.name
        </div>
      ))}
    </div>
  );
};
