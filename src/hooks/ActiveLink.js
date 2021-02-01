import { Link, useRouteMatch } from 'react-router-dom';

export const ActiveLink = ({ label, to, activeOnlyWhenExact }) => {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  return (
    <Link className={match ? 'active' : ''} to={to}>
      {label}
    </Link>
  );
};
