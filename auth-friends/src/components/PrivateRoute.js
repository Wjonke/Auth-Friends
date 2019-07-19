import React from 'react'
import {Route, Redirect} from "react-router-dom"

const PrivateRoute = ({ component: FriendsList, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => 
        localStorage.getItem('token' ? ( <FriendsList {...props} /> ) : <Redirect to='/'/>)
    }
    />
  )
}

export default PrivateRoute
