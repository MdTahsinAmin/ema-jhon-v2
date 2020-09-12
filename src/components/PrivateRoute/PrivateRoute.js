import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Usercontext } from '../../App';

const PrivateRoute = ({children,...rest}) => {

    const [signUser , setSignUser] = useContext(Usercontext)

    return (
        <Route
        {...rest}
        render={({ location }) =>
          signUser.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;