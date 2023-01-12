import { NavLink } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setTargetUser, switchFormState } from '../redux/usersSlice';
import Sidebar from './Sidebar';
import Form from './Form';

const UserDetails = () => {
  const dispatch = useAppDispatch();
  const { readOnlyForm } = useAppSelector((state) => state.usersStore);

  return (
    <div className="grid-container">
      <Sidebar />
      <div className="user-profile">
        <h4>User Profile</h4>
        <button
          className="btn"
          type="button"
          onClick={() => dispatch(switchFormState(!readOnlyForm))}
        >
          Edit
        </button>
        <Form />
        <NavLink
          to="/"
          onClick={() => dispatch(setTargetUser(null))}
          className="user-details-link"
        >
          Home
        </NavLink>
      </div>
    </div>
  );
};

export default UserDetails;
