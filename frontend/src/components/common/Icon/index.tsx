import React from "react";
import cn from "classnames";

import { IconProps, SvgIndexable } from "./Icon.props";
import IconNames from "./Icon.Components";
import styles from "./Icon.module.scss";

const Icon: React.FC<IconProps> = (props: IconProps): JSX.Element | null => {
  const { id, name, className, color = "black", size = "medium", testId, ariaLabel, ariaHidden } = props;
  const iconClasses = cn(styles["icon"], styles[size], styles[color], className);

  if ((IconNames as SvgIndexable)[name]) {
    return React.createElement(
      (IconNames as SvgIndexable)[name],
      {
        id: id,
        className: iconClasses,
        "data-testid": testId ? `test__${testId}-icon` : undefined,
        "aria-hidden": ariaHidden ? ariaHidden : undefined,
        "aria-label": ariaLabel ? ariaLabel : undefined,
      },
      null,
    );
  } else {
    return null;
  }
};

export default Icon;
