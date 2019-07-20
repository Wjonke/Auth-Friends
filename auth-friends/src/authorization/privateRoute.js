import React from 'react'
import { Route, Redirect } from "react-router-dom";



const PrivateRoute = ({ component: FriendsList, ...rest }) => {
if (localStorage.getItem('token')) {
return(
  <Route
    {...rest}
    render={
    props=> <FriendsList {...props}/>
    }
/>
)

} else {
    return <Redirect to='/login'/>
  }
}
export default PrivateRoute
