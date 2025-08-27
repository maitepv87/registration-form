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
      />

      {error && (
        <span id={`${id}-error`} className={styles.errorMessage}>
          {error}
        </span>
      )}
    </div>
  );
};
