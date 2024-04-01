import { isRGB } from '@tma.js/sdk';

import { RGB } from '~/components/RGB/RGB.jsx';

import './DisplayData.css';

/**
 * @type {DisplayDataComponent}
 */
export const DisplayData = ({ rows }) => {
  return (
    <div className="display-data">
      {rows.map(({ title, value }, idx) => {
        let valueNode;

        if (value === undefined) {
          valueNode = <i>empty</i>;
        } else if (typeof value === 'string' && isRGB(value)) {
          valueNode = <RGB color={value} />;
        } else if (typeof value === 'boolean') {
          valueNode = value ? '✔️' : '❌';
        } else {
          valueNode = value;
        }

        return (
          <div className="display-data__line" key={idx}>
            <span className="display-data__line-title">{title}</span>
            <span className="display-data__line-value">{valueNode}</span>
          </div>
        );
      })}
    </div>
  );
};
