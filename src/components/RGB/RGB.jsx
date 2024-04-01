import { classNames } from '@tma.js/sdk';

import './RGB.css';

/**
 * @type {RGBComponent}
 */
export const RGB = ({ color, className, ...rest }) => (
  <span {...rest} className={classNames('rgb', className)}>
    <i className="rgb__icon" style={{ backgroundColor: color }} />
    {color}
  </span>
);
