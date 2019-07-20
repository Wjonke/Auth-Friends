import React from "react";
import { Route, Link, Redirect } from "react-router-dom";
import PrivateRoute from './authorization/privateRoute'
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import FriendsForm from "./components/FriendsForm";

import './App.css';



function App() {


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
      <PrivateRoute exact path="/add-friend" component={FriendsForm} />
    </div>



    
  );
}

export default App;
