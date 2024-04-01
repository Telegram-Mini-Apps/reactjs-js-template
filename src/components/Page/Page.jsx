import './Page.css';

/**
 * @type {PageComponent}
 */
export const Page = ({ title, children, disclaimer }) => (
  <div className="page">
    <h1 className="page__title">{title}</h1>
    {disclaimer && <div className="page__disclaimer">{disclaimer}</div>}
    {children}
  </div>
);
