import { useAppDispatch } from '../../redux/hooks';
import { sortByCity, sortByCompany } from '../../redux/usersSlice';
import './Sidebar.sass';

const Sidebar = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="side-bar">
      <p className="side-bar-title">Sorting by</p>
      <button
        className="btn margin-10"
        type="button"
        onClick={() => dispatch(sortByCity())}
      >
        city
      </button>
      <button
        className="btn margin-10"
        type="button"
        onClick={() => dispatch(sortByCompany())}
      >
        company
      </button>
    </div>
  );
};

export default Sidebar;
