import { useFormik } from 'formik';
import { NavLink } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { setTargetUser } from '../../redux/usersSlice';

const From = () => {
  const dispatch = useAppDispatch();
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
      comment: '',
    },
    // validationSchema: yup.object().shape({
    //   name: yup.string().required(),
    //   username: yup.string().required(),
    //   email: yup.string().required(),
    //   street: yup.string().required(),
    //   city: yup.string().required(),
    //   zipcode: yup.string().required(),
    //   phone: yup.string().required(),
    //   website: yup.string().required(),
    // }),
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
    },
  });

  return (
    <form id="user-form" onSubmit={formik.handleSubmit}>
      <fieldset disabled={readOnlyForm}>
        <label htmlFor="name" className="field-margin">
          Name
          <br />
          <input
            required
            type="text"
            id="name"
            name="name"
            className="field-margin"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </label>
        <br />
        <label htmlFor="username" className="field-margin">
          Username
          <br />
          <input
            required
            type="text"
            id="username"
            name="username"
            className="field-margin"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
        </label>
        <br />
        <label htmlFor="email" className="field-margin">
          Email
          <br />
          <input
            required
            type="email"
            id="email"
            name="email"
            className="field-margin"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </label>
        <br />
        <label htmlFor="street" className="field-margin">
          Street
          <br />
          <input
            required
            type="text"
            id="street"
            name="street"
            className="field-margin"
            onChange={formik.handleChange}
            value={formik.values.street}
          />
        </label>
        <br />
        <label htmlFor="city" className="field-margin">
          City
          <br />
          <input
            required
            type="text"
            id="city"
            name="city"
            className="field-margin"
            onChange={formik.handleChange}
            value={formik.values.city}
          />
        </label>
        <br />
        <label htmlFor="zipcode" className="field-margin">
          Zip Code
          <br />
          <input
            required
            type="text"
            id="zipcode"
            name="zipcode"
            className="field-margin"
            onChange={formik.handleChange}
            value={formik.values.zipcode}
          />
        </label>
        <br />
        <label htmlFor="phone" className="field-margin">
          Phone
          <br />
          <input
            required
            type="text"
            id="phone"
            name="phone"
            className="field-margin"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
        </label>
        <br />
        <label htmlFor="website" className="field-margin">
          Website
          <br />
          <input
            required
            type="text"
            id="website"
            name="website"
            className="field-margin"
            onChange={formik.handleChange}
            value={formik.values.website}
          />
        </label>
        <br />
        <label htmlFor="comment" className="field-margin">
          Comment
          <br />
          <textarea
            rows={5}
            name="comment"
            form="user-form"
            id="comment"
            className="field-margin"
            onChange={formik.handleChange}
            value={formik.values.comment}
          />
        </label>
        <br />
      </fieldset>
      <div className="button-flex-control-panel">
        <NavLink
          to="/"
          onClick={() => dispatch(setTargetUser(null))}
          className="link"
        >
          Home
        </NavLink>
        <button
          type="submit"
          className={readOnlyForm ? 'send-button-lock' : 'send-button-unlock'}
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default From;
