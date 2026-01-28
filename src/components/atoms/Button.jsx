import { Link } from "react-router-dom";

export default function Button({
  variant = "primary",
  disabled = false,
  className,
  href,
  to,
  children,
  ...props
}) {
  let Component;

  if (to) {
    Component = Link;
  } else if (href) {
    Component = "a";
  } else {
    Component = "button";
  }

  const BASE_CLASSES = "button";
  const VARIANTS = {
    primary: "button--primary",
    secondary: "button--secondary",
  };

  function getButtonClasses({ variant, disabled, className }) {
    return [
      BASE_CLASSES,
      VARIANTS[variant],
      className,
      disabled && "button__disabled",
    ]
      .filter(Boolean)
      .join(" ");
  }

  return (
    <Component
      href={href}
      to={to}
      disabled={!to && !href && disabled}
      className={getButtonClasses({ variant, disabled, className })}
      {...props}
    >
      {children}
    </Component>
  );
}
