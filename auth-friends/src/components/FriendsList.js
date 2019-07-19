import React, { useEffect, useState } from "react";
import {axiosWithAuth} from "../authorization/axiosWithAuth";


const FriendsList = () => {
  const [friends, setFriends] = useState([]);
  
  function addFriend(res) {
    setFriends(res);
  }
  
  useEffect(() => {
    axiosWithAuth()
      .get('/friends')
      .then(res => {
        console.log(res);
        addFriend(res.data);
      })

      .catch(err => {console.log('err')
        }, []);

    return (
      <div>
                                            {/* mapping over returned data from api below */}
        {friends.map(friend => (
              
          <div key={friend.id}>
            <h1>{friend.name}</h1>
            <h2>{friend.age}</h2>
            <h2>{friend.email}</h2>
          </div>
              
        ))}
      </div> 
    );
  
}
)} 

export default FriendsList
