import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { switchFormState } from '../../redux/usersSlice';
import Sidebar from '../side-bar/Sidebar';
import Form from './Form';
import './UserProfile.sass';

const UserDetails = () => {
  const dispatch = useAppDispatch();
  const { readOnlyForm } = useAppSelector((state) => state.usersStore);

  return (
    <div className="grid-container">
      <Sidebar />
      <div className="user-profile">
        <div className="user-profile-title margin-left-10">
          <h4 className="user-list-title">User Profile</h4>
          <button
            className="edit-button"
            type="button"
            onClick={() => dispatch(switchFormState(!readOnlyForm))}
          >
            Edit
          </button>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default UserDetails;
