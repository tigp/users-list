const Sidebar = () => (
  <div className="side-bar">
    <p className="side-bar-title">Sorting by</p>
    <button
      className="btn margin-10"
      type="button"
      onClick={() => console.log('Find by City!')}
    >
      city
    </button>
    <button
      className="btn margin-10"
      type="button"
      onClick={() => console.log('Find by Company!')}
    >
      company
    </button>
  </div>
);

export default Sidebar;
