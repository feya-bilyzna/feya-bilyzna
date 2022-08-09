import React from 'react';
import { Icon } from "react-materialize";
import cx from "classnames";

const CustomIcon = ({ children, className, ...props }) => {
   return <span data-nosnippet>
      <Icon className={cx("notranslate", className)} {...props}>{children}</Icon>
   </span>
};

export default CustomIcon
