import { classNames } from '@tma.js/sdk';

import './RGB.css';

/**
 * @param {import('@tma.js/sdk').RGB} color
 * @param {string} [className]
 * @param rest
 * @return {JSX.Element}
 */
export function RGB({ color, className, ...rest }) {
  return (
    <span {...rest} className={classNames('rgb', className)}>
      <i className="rgb__icon" style={{ backgroundColor: color }} />
      {color}
    </span>
  );
}
