import { ReactNode, MouseEventHandler } from "react";

export interface ButtonProps {
  /**
   * The body of the button
   */
  readonly children?: ReactNode;

  /**
   * The length of the button
   */
  readonly fullWidth?: boolean;

  /**
   * The id of the button
   */
  readonly id?: string;

  /**
   * The test id of the icon
   */
  readonly testId?: string;

  /**
   * any extra class that a developer wants to send to give it extra styles
   */
  readonly className?: string;

  /**
   * Disable the button
   */
  readonly disabled?: boolean;

  /**
   * Icon to be displayed
   */
  readonly icon?: string;

  /**
   * The size of the button
   */
  readonly size?: "xsmall" | "small" | "medium" | "large";

  /**
   * The color of the button
   */
  readonly color?: "turquoise" | "darkblue" | "red" | "white" | "green";

  /**
   * Location of the icon
   */
  readonly iconLocation?: "left" | "right";

  /**
   * The type of the button
   */
  readonly type?: "submit" | "button";

  /**
   * Button tier
   */
  readonly tier?: "primary" | "secondary" | "tertiary";

  /**
   * Handles button onClick action
   */
  readonly onClick?: MouseEventHandler<HTMLButtonElement>;

  /**
   * Add aria-label attribute for accessibility compliance.  Required if the button has no text, i.e. is an icon only button
   */
  readonly ariaLabel?: string;

  /**
   * Button used to close parent element
   */
  readonly closeButton?: boolean;
}
