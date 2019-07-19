import React from "react";
import { Route, Link, Redirect } from "react-router-dom";

import Login from "./components/Login";
import FriendsList from "./components/FriendsList";

import './App.css';



function App() {
  const PrivateRoute = ({ component: FriendsList, ...rest }) => {
    return (
      <Route
        {...rest}
        render={props => 
          localStorage.getItem('token' ? ( <FriendsList {...props} /> ) : <Redirect to='/login'/>)
      }
      />
    )
  }

  return (
    <div className="App" style={{ padding: 30 }}>

      <div>
        <div>
          <Link to="/login">
            <button className="btn">Login</button>
          </Link>

          <Link to="/friends-list">
            <button className="btn">Friends List</button>
          </Link>
          
          <button
              className="btn"
              onClick={() => {
                localStorage.removeItem("token");
                
              }}
            >
              Logout
            </button>
        </div>
        
      </div>
      
      <Route exact path="/" />
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/friends-list" component={FriendsList} />
    </div>



    
  );
}

export default App;
