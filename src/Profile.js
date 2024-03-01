import React from 'react'
import './Profile.css'

export default function Profile(props) {
  return (
    <div className='profile1'>
      <div>
      <img src="3135823.png" alt="" width={150}></img> 
      </div>
      <div className="bio">
        <div className="fullname">
          <p>{props.name}</p>
        </div>
        <div className="description">
          <p>{props.profession}</p>
        </div>
        <div className="followers">
          <p>followers:{props.followers}</p>
        </div>
        <div className="friends">
          <p>friends:{props.friends}</p>
        </div>
        <div className="rating">
          <p>rating:{props.rating}</p>
        </div>
      </div>
    </div>

  )
}
