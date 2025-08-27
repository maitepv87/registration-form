import styles from "./CheckboxField.module.css";

export const CheckboxField = ({
  label,
  name,
  checked,
  onChange,
  onBlur,
  error,
  required = false,
  ...props
}) => {
  const id = `checkbox-${name}`;

  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        <input
          type="checkbox"
          id={id}
          name={name}
          checked={checked}
          onChange={onChange}
          onBlur={onBlur}
          required={required}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`${styles.input} ${error ? styles.invalid : ""}`}
          {...props}
        />
        {label}
      </label>

      {error && (
        <span id={`${id}-error`} className={styles.errorMessage}>
          {error}
        </span>
      )}
    </div>
  );
};
