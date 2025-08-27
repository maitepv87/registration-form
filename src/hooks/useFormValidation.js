/**
 * useFormValidation
 *
 * Custom validation hook for controlled forms.
 * Returns an object of field-specific error messages.
 * Designed for editorial clarity, onboarding, and reusability.
 *
 * @param {Object} state - Current form state object.
 * @returns {Object} errors - Object with validation messages keyed by field name.
 *
 * Usage:
 * const [errors, setErrors] = useState({})
 * const handleSubmit = (e) => {
 *   e.preventDefault();
 *   const newErrors = useFormValidation(state);
 *   setErrors(newErrors);
 *
 *   if (Object.keys(newErrors).length === 0) {
 *     console.log("Form submitted:", state);
 *   }
 * }
 *
 * <TextField name="email" error={errors.email} />
 */

export const useFormValidation = (state) => {
  const errors = {};

  // Name: required
  if (!state.name?.trim()) errors.name = "Name is required";

  // Email: required + format
  if (!state.email) {
    errors.email = "Email is required.";
  } else if (!/^\S+@\S+\.\S+$/.test(state.email)) {
    errors.email = "Invalid email address.";
  }

  // Password: required + length
  if (!state.password) {
    errors.password = "Password is required.";
  } else if (state.password.length < 6) {
    errors.password = "Password must be at least 6 characters.";
  }

  // Confirm: must match password
  if (state.confirm !== state.password) {
    errors.confirm = "Passwords do not match.";
  }

  // Country: required
  if (!state.country) errors.country = "Please select a country";

  // Agreement: must be checked
  if (!state.agree) errors.agree = "You must agree to the terms";

  return errors;
};
