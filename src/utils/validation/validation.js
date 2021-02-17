export const validateLogin = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (values.password && !values.password) {
    errors.password = 'Required';
  } else if (values.password.length <= 8) {
    errors.password = 'Must be more than 8 characters';
  }

  return errors;
};

export const validateForm = (values) => {
  const errors = {};

  if (values.title && !values.title) {
    errors.title = 'Required';
  } else if (values.title.length <= 12) {
    errors.title = 'Must be more than 5 characters';
  } else if (values.title === undefined) {
    errors.title = 'Must be more than 5 characters';
  }

  return errors;
};
