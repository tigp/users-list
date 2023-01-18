import { NavLink } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { setTargetUser } from '../../redux/usersSlice';
import Sidebar from '../side-bar/Sidebar';
import './Users.sass';

const Users = () => {
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state.usersStore);

  return (
    <div className="grid-container">
      <Sidebar />
      <div className="users-list">
        <h4 className="margin-left-10 user-list-title">Users List</h4>
        {users.map((user) => (
          <div className="margin-left-10 user-card" key={user.id}>
            <p>
              <span className="field-description">Name: </span>
              {user.name}
            </p>
            <p>
              <span className="field-description">City: </span>
              {user.address.city}
            </p>
            <p>
              <span className="field-description">Company: </span>
              {user.company.name}
            </p>
            <NavLink
              to={`/user/${user.id}`}
              onClick={() => dispatch(setTargetUser(user.id))}
              className="link"
            >
              Details
            </NavLink>
          </div>
        ))}
        <div className="users-count margin-left-10">{`${users.length} Users Found`}</div>
      </div>
    </div>
  );
};

export default Users;
