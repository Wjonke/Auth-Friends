import React, { useEffect, useState } from "react";
import axios from "axios";
import Friend from './Friend';

const FriendsList = ({history}) => {

  const url ="http://localhost:5000/api/friends";
  axios
    .get(url)
    .then(res => {
        console.log(res);
        
      })
    .catch(res => {
      console.log('oops your get request didnt work!');
      });


  return (
    <div>






      <h1>Friends coming soon</h1>
      <Friend />
      {/* map over friends from api and display each friend */}
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
  )
}

export default FriendsList
