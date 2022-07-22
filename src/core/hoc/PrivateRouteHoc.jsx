import React from 'react';
import { Redirect, Route } from 'react-router-dom/cjs/react-router-dom.min';
import PrivateLayout from '../../components/layout/private/PrivateLayout';
import { useSelector } from 'react-redux';

const PrivateRouteHoc = ({ component: Component, path }) => {
  const userData = useSelector((state) => state.userData);
  return (
    <Route
      exact
      path={path}
      render={() =>
        userData != null ? (
          <PrivateLayout>
            <Component />
          </PrivateLayout>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRouteHoc;
