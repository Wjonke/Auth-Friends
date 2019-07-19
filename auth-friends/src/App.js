import React from "react";

import { Route, Link, Redirect } from "react-router-dom";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";

import './App.css';



function App({history}) {

  return (
    <div className="App" style={{ padding: 30 }}>

      <div>
        <div>
          <Link to="/">
            <button className="btn">Login</button>
          </Link>

          <Link to="/friendsList">
            <button className="btn">Friends List</button>
          </Link>
          
          <button
              className="btn"
              onClick={() => {
                localStorage.removeItem("token");
                history.push("/");
              }}
            >
              Logout
            </button>
        </div>
        
      </div>
      
      <Route exact path="/" component={Login} />

      <Route
        exact
        path="/friendsList"
        render={props => {
          const token = localStorage.getItem("token");

          if (!token) {
            return <Redirect to="/" />;
          }
          return <FriendsList {...props} />;
        }}
      />
    </div>



    
  );
}

export default App;
