/**
 * Accessible ButtonBase component
 *
 * Includes variant styling, ARIA support, and modular CSS.
 * Designed for editorial clarity, onboarding, and scalable UI architecture.
 *
 * Usage:
 * <ButtonBase type="submit" variant="primary">
 *   Register
 * </ButtonBase>
 *
 * <ButtonBase type="button" variant="secondary" onClick={handleReset}>
 *   Clear
 * </ButtonBase>
 *
 * Supports type="submit", "button", "reset".
 * Variants: "primary", "secondary", "danger".
 */

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
