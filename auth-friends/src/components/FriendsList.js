import React, { useEffect, useState } from "react";
import AxiosWithAuth from "./AxiosWithAuth";
import AddFriend from './AddFriend';

const FriendsList = (props) => {
  const [friends, setFriends] = useState([]);
  const url ="http://localhost:5000/api/friends";
  
  useEffect(() => {
    AxiosWithAuth()
      .get(url)
      .then(res => setFriends(res.data))
      .catch(err => {console.log('oops your get request didnt work!')
        }, [])

        return (
          <div>
            
            <AddFriend setFriends={setFriends} />

                                            {/* mapping over returned data from api below */}
            {friends.map(friend => {
              return (
                <div key={friend.id}>
                  {friend.name}
                  {friend.age}
                  {friend.email}
                </div>
              )
            })}
           </div> 
        )
  }, [friends])
}

export default FriendsList
