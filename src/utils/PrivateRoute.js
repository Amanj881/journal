import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from './Common';

// handle the private routes
function PrivateRoute({ component: Component, ...rest }) {
	
  return (
  	<div className="flex">
      
    <Route
      {...rest}
      render={(props) => getToken() ? <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
    />
    </div>
  )
}

export default PrivateRoute;