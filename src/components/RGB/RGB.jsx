import { classNames } from '@tma.js/sdk';

import './RGB.css';

/**
 * @typedef {Object} RGBProps
 * @extends JSX.IntrinsicElements['div']
 * @property {import('@tma.js/sdk').RGB} color
 */

/**
 * @param {RGBProps} props
 * @returns {JSX.Element}
 */
export function RGB(props) {
  const {
    color,
    className,
    ...rest
  } = props;

  return (
    <span {...rest} className={classNames('rgb', className)}>
      <i className="rgb__icon" style={{ backgroundColor: color }} />
      {color}
    </span>
  );
}
