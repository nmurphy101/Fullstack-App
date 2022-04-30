export interface SvgIndexable {
  [key: string]: React.FC<React.SVGProps<SVGSVGElement> & { "data-testid": string | undefined }>;
}

export interface IconProps {
  /**
   * any extra class that a developer wants to send to give it extra styles
   */
  readonly className?: string;

  /**
   * The id of the icon
   */
  readonly id?: string;

  /**
   * The test id of the icon
   */
  readonly testId?: string;

  /**
   * The the of the icon, based on the file name.
   */
  readonly name: string;

  /**
   * The size of the icon
   */
  readonly size?: "xsmall" | "small" | "medium";

  /**
   * The color of the icon
   */
  readonly color?: "black" | "white" | "darkblue" | "turquoise" | "lightgrey" | "red" | "green" | "orange" | "darkgreen" | "darkgrey";

  /**
   * The aria label of the icon
   */
  ariaLabel?: string;

  /**
   * The aria hidden of the icon
   */
  ariaHidden?: "true" | "false" | undefined;
}
