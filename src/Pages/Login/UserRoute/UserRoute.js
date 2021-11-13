import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const UserRoute = ({children,...rest}) => {
    const{user, isLoading} = useAuth();
    if(isLoading) {
        return <CircularProgress/>
    }
    return (
        <Route
      {...rest}
      render={({ location }) =>
        user.email && user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/dashboard",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default UserRoute;