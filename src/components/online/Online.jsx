import React from 'react'
import './online.css'
const Online = ({id,user}) => {
  return (
    <div>
        <ul className='onlinefriends'>
        <li className="friendcontainer">
            <img src={user.profilePicture} alt="img" className="friendprofileimg" />
            <span className='activesymbol'></span>
            <span className="friendusername">{user.username}</span>
        </li>
        </ul>
    </div>
  )
}

export default Online