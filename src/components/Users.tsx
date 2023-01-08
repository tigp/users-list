/*
eslint object-curly-newline: ["error", { "ObjectExpression": "always", "ObjectPattern": "never" }]
*/

import Sidebar from './Sidebar';

const Users = () => {
  type User = {
    first: string;
    last: string;
    email: string;
    id: number;
  };

  const contacts: User[] = [
    {
      first: 'Max',
      last: 'Diesel',
      email: 'adjnakjnd@gmail.com',
      id: 1,
    },
    {
      first: 'Anton',
      last: 'Sanches',
      email: 'Sanches@gmail.com',
      id: 2,
    },
  ];

  // React.Suspense for loading
  return (
    <div className="grid-container">
      <Sidebar />
      <div className="users-list">
        <h3>Users List</h3>
        {contacts.map(({ first, last, email, id }: User) => (
          <div key={id}>
            <p>{first}</p>
            <p>{last}</p>
            <p>{email}</p>
            <br />
          </div>
        ))}
        <p>
          {contacts.length}
          Users Found
        </p>
      </div>
    </div>
  );
};

export default Users;
