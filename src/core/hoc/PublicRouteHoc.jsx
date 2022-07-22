import React from 'react';
import { Redirect, Route } from 'react-router-dom/cjs/react-router-dom.min';
import PublicLayout from '../../components/layout/public/PublicLayout';
import { useSelector } from 'react-redux';

const PublicRouteHoc = ({ component: Component, path }) => {
  const userData = useSelector((state) => state.userData);
  return (
    <Route
      exact
      path={path}
      render={() =>
        userData === null ? (
          <PublicLayout>
            <Component />
          </PublicLayout>
        ) : (
          <Redirect to="/home" />
        )
      }
    />
  );
};

export default PublicRouteHoc;
