import styles from "./Button.module.css";

export const ButtonBase = ({
  type = "button",
  variant = "primary",
  disabled = false,
  onClick,
  children,
  ariaLabel,
  className = "",
  ...props
}) => {
  const variantClass = styles[variant] || "";
  const disabledClass = disabled ? styles.disabled : "";

  return (
    <button
      type={type}
      className={`${styles.button} ${variantClass} ${disabledClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </button>
  );
};
