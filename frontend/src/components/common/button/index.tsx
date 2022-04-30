import React, { useCallback } from "react";
import cn from "classnames";
import Icon from "../Icon";

import { ButtonProps } from "./Button.props";
import styles from "./Button.module.scss";

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const {
    id,
    testId,
    children,
    fullWidth,
    disabled,
    className,
    icon,
    iconLocation,
    onClick,
    tier = "primary",
    type = "button",
    size = "large",
    color = "turquoise",
    closeButton = false,
  } = props;

  const buttonClasses = cn(
    styles["button"],
    styles[size],
    styles[color],
    styles[tier],
    { [styles[`icon-only-${size}`]]: !children },
    { [styles["full-width"]]: fullWidth },
    { [styles[`icon-location-${iconLocation}`]]: !!children && iconLocation },
    className,
  );

  let buttonContent = children;
  if (icon) {
    if (iconLocation === "right") {
      buttonContent = (
        <>
          {children} <Icon className="button-icon" id={id} name={icon} size={size === "xsmall" ? "small" : "medium"} />
        </>
      );
    } else if (!children) {
      buttonContent = <Icon className="button-icon" id={id} name={icon} size={size === "xsmall" ? "small" : "medium"} />;
    } else {
      buttonContent = (
        <>
          <Icon className="button-icon" id={id} name={icon} size={size === "xsmall" ? "small" : "medium"} /> {children}
        </>
      );
    }
  }

  const handleOnClick = useCallback(
    (ev: React.MouseEvent<HTMLButtonElement>): void => {
      onClick && onClick(ev);
    },
    [onClick],
  );

  if (closeButton) {
    return (
      <button
        type="button"
        className={buttonClasses}
        id={id}
        data-testid={testId ? `test__${testId}` : undefined}
        disabled={disabled}
        onClick={(e): void => handleOnClick(e)}
      >
        <Icon color={color} className="button-close-icon" name="x" ariaHidden="true" />
      </button>
    );
  }

  return (
    <button
      type={type}
      className={buttonClasses}
      id={id}
      data-testid={testId ? `test__${testId}` : undefined}
      disabled={disabled}
      onClick={(e): void => handleOnClick(e)}
    >
      {buttonContent}
    </button>
  );
};
