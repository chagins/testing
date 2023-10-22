import { User } from './types';

interface UserItemProps {
  user: User;
  onDelete: (id: number) => void;
}

export const UserItem = ({ user, onDelete }: UserItemProps) => {
  return (
    <div>
      {user.name}
      <button type="button" id="user-delete" onClick={() => onDelete(user.id)}>
        delete
      </button>
    </div>
  );
};
