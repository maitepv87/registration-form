import { useFormReducer, useFormValidation } from "../hooks";
import { useState } from "react";
import { TextField, CheckboxField, ButtonBase, SelectField } from "./";
import styles from "../styles/RegistrationForm.module.css";

const initialForm = {
  name: "",
  email: "",
  password: "",
  confirm: "",
  country: "",
  agree: false,
};

export const RegistrationForm = () => {
  const { state, onChange, onReset } = useFormReducer(initialForm);
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newErrors = useFormValidation(state);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted:", state);
      handleReset();
    }
  };

  const handleReset = () => {
    onReset();
    setErrors({});
  };

  return (
    <div className={styles.page}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Register</h2>

        <TextField
          label="Name"
          type="text"
          name="name"
          value={state.name}
          onChange={onChange}
          required
          error={errors.name}
        />

        <SelectField
          label="Country"
          name="country"
          value={state.country}
          options={[
            { label: "USA", value: "us" },
            { label: "Canada", value: "ca" },
            { label: "Cuba", value: "cu" },
          ]}
          onChange={onChange}
          required
          error={errors.country}
        />

        <TextField
          label="Email"
          type="email"
          name="email"
          value={state.email}
          onChange={onChange}
          required
          error={errors.email}
        />

        <TextField
          label="Password"
          type="password"
          name="password"
          value={state.password}
          onChange={onChange}
          required
          error={errors.password}
        />

        <TextField
          label="Confirm Password"
          type="password"
          name="confirm"
          value={state.confirm}
          onChange={onChange}
          required
          error={errors.confirm}
        />

        <CheckboxField
          label="I agree to the terms"
          name="agree"
          checked={state.agree}
          onChange={onChange}
          required
          error={errors.agree}
        />

        <ButtonBase type="submit" variant="primary">
          Register
        </ButtonBase>

        <ButtonBase type="button" variant="secondary" onClick={handleReset}>
          Clear
        </ButtonBase>
      </form>
    </div>
  );
};
