export const useFormValidation = (state) => {
  const errors = {};

  if (!state.name.trim()) errors.name = "Name is required";
  if (!state.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^\S+@\S+\.\S+$/.test(state.email)) {
    errors.email = "Email is invalid";
  }
  if (!state.password) errors.password = "Password is required";
  if (!state.confirm) {
    errors.confirm = "Please confirm your password";
  } else if (state.confirm !== state.password) {
    errors.confirm = "Passwords do not match";
  }
  if (!state.country) errors.country = "Please select a country";
  if (!state.agree) errors.agree = "You must agree to the terms";

  return errors;
};
