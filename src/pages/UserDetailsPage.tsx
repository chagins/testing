import { useParams } from 'react-router-dom';

export const UserDetailsPage = () => {
  const { id } = useParams();
  return <div data-testid="user-page">{`USER ${id} DETAILS PAGE`}</div>;
};
