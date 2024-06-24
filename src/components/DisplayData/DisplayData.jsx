import { isRGB } from '@tma.js/sdk-react';
import { Cell, Checkbox, Section } from '@telegram-apps/telegram-ui';

import { RGB } from '@/components/RGB/RGB.jsx';
import { Link } from '@/components/Link/Link.jsx';

import './DisplayData.css';

/**
 * @typedef {object} DisplayDataRow
 * @property {string} title
 * @property {string | boolean | import('react').ReactNode | import('@tma.js/sdk-react').RGB} [value]
 */

/**
 * @param {DisplayDataRow[]} rows - list of rows to be displayed.
 * @return {JSX.Element}
 */
export function DisplayData({ header, rows }) {
  return (
    <Section header={header}>
      {rows.map((item, idx) => {
        let valueNode;

        if (item.value === undefined) {
          valueNode = <i>empty</i>;
        } else {
          if ('type' in item) {
            valueNode = <Link to={item.value}>Open</Link>;
          } else if (typeof item.value === 'string') {
            valueNode = isRGB(item.value)
              ? <RGB color={item.value}/>
              : item.value;
          } else if (typeof item.value === 'boolean') {
            valueNode = <Checkbox checked={item.value} disabled/>;
          } else {
            valueNode = item.value;
          }
        }

        return (
          <Cell
            className="display-data__line"
            subhead={item.title}
            readOnly
            multiline={true}
            key={idx}
          >
          <span className="display-data__line-value">
            {valueNode}
          </span>
          </Cell>
        );
      })}
    </Section>
  );
}
