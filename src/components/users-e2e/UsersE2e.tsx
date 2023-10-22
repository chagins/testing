import { useEffect, useState } from 'react';
import { User } from './types';
import { UserItem } from './UserItem';

export const UsersE2e = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) =>
        setTimeout(() => {
          setUsers(json);
          setIsLoading(false);
        }, 1000)
      )
      .catch((error) => {
        console.error({ error });
      });
  }, []);

  const onDelete = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      {isLoading && <p id="users-loading">Loading...</p>}
      {users.length > 0 && (
        <div id="users-list">
          {users.map((user) => (
            <UserItem key={user.id} user={user} onDelete={onDelete} />
          ))}
        </div>
      )}
    </div>
  );
};
