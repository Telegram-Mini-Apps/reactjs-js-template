import { classNames } from '@telegram-apps/sdk-react';

import './RGB.css';

/**
 * @param {import('@telegram-apps/sdk-react').RGB} color
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
