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
        <h4 className="margin-left-10 user-list-title">Users List</h4>
        {contacts.map(({ first, last, email, id }: User) => (
          <div className="margin-left-10 user-card" key={id}>
            <p>{first}</p>
            <p>{last}</p>
            <p>{email}</p>
            <p>Подробнее</p>
          </div>
        ))}
        <p className="margin-left-10">{`${contacts.length} Users Found`}</p>
      </div>
    </div>
  );
};

export default Users;
