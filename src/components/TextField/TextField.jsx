/**
 * Accessible TextField component
 *
 * Includes label, error messaging, ARIA attributes, and modular CSS.
 * Designed for editorial clarity, onboarding, and scalable form architecture.
 *
 * Usage:
 * <TextField
 *   label="Name"
 *   type="text"
 *   name="name"
 *   value={state.name}
 *   onChange={onChange}
 *   required
 *   error={errors.name}
 * />
 * Supports type="text", "email", "password", "search", etc. —
 * any valid HTML input type compatible with <input />.
 */

import styles from "./TextField.module.css";

export const TextField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  onBlur,
  error,
  required = false,
  ...props
}) => {
  const id = `input-${name}`;

  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>

      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`${styles.input} ${error ? styles.invalid : ""}`}
        {...props}
      />

      {error && (
        <span id={`${id}-error`} className={styles.errorMessage}>
          {error}
        </span>
      )}
    </div>
  );
};
