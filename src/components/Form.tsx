import { useFormik } from 'formik';

import { useAppSelector } from '../redux/hooks';

const From = () => {
  const { users, targetUser, readOnlyForm } = useAppSelector(
    (state) => state.usersStore,
  );
  const user = targetUser ? users[targetUser - 1] : null;

  const formik = useFormik({
    initialValues: {
      name: user?.name,
      username: user?.username,
      email: user?.email,
      street: user?.address.street,
      city: user?.address.city,
      zipcode: user?.address.zipcode,
      phone: user?.phone,
      website: user?.website,
    },
    onSubmit: (values) => {
      console.log('Data sended!');
    },
  });

  return (
    <form id="user-form" onSubmit={formik.handleSubmit}>
      <fieldset disabled={readOnlyForm}>
        <label htmlFor="name">
          Name
          <br />
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </label>
        <br />
        <label htmlFor="username">
          Username
          <br />
          <input
            type="text"
            id="username"
            name="username"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
        </label>
        <br />
        <label htmlFor="email">
          Email
          <br />
          <input
            type="text"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </label>
        <br />
        <label htmlFor="street">
          Street
          <br />
          <input
            type="text"
            id="street"
            name="street"
            onChange={formik.handleChange}
            value={formik.values.street}
          />
        </label>
        <br />
        <label htmlFor="city">
          City
          <br />
          <input
            type="text"
            id="city"
            name="city"
            onChange={formik.handleChange}
            value={formik.values.city}
          />
        </label>
        <br />
        <label htmlFor="zipcode">
          Zip Code
          <br />
          <input
            type="text"
            id="zipcode"
            name="zipcode"
            onChange={formik.handleChange}
            value={formik.values.zipcode}
          />
        </label>
        <br />
        <label htmlFor="phone">
          Phone
          <br />
          <input
            type="text"
            id="phone"
            name="phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
        </label>
        <br />
        <label htmlFor="website">
          Website
          <br />
          <input
            type="text"
            id="website"
            name="website"
            onChange={formik.handleChange}
            value={formik.values.website}
          />
        </label>
        <br />
        <label htmlFor="comment">
          Comment
          <br />
          <textarea
            rows={4}
            cols={50}
            name="comment"
            form="user-form"
            id="comment"
          />
        </label>
        <br />
        <button type="submit">Send</button>
      </fieldset>
    </form>
  );
};

export default From;
