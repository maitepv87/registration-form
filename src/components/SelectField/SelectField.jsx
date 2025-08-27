import styles from "./SelectField.module.css";

export const SelectField = ({
  label,
  name,
  value,
  options = [],
  onChange,
  onBlur,
  error,
  required = false,
  disabled = false,
  ...props
}) => {
  const id = `select-${name}`;

  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>

      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        disabled={disabled}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`${styles.input} ${error ? styles.invalid : ""}`}
        {...props}
      >
        {options.length === 0 ? (
          <option disabled>No options available</option>
        ) : (
          options.map((option) =>
            typeof option === "object" && option.value && option.label ? (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ) : null
          )
        )}
      </select>
      {error && (
        <span id={`${id}-error`} className={styles.errorMessage}>
          {error}
        </span>
      )}
    </div>
  );
};
