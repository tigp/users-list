import { useAppSelector, useAppDispatch } from '../redux/hooks';
import Sidebar from './Sidebar';

const UserDetails = () => {
  const { users, targetUser } = useAppSelector((state) => state.usersStore);
  const user = targetUser ? users[targetUser - 1] : null;

  return (
    <div className="grid-container">
      <Sidebar />
      <div>{user && user.name}</div>
    </div>
  );
};

export default UserDetails;
