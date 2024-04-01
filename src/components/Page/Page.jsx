import './Page.css';

/**
 * @property {string} title
 * @property {ReactNode | undefined} disclaimer
 * @property {ReactNode | undefined} children
 * @return {JSX.Element}
 */
export function Page({ title, children, disclaimer }) {
  return (
    <div className="page">
      <h1 className="page__title">{title}</h1>
      {disclaimer && <div className="page__disclaimer">{disclaimer}</div>}
      {children}
    </div>
  );
}
