import React from 'react'

export default function Friend(props) {
  return (
    <div className='friend'>
      <div className='picture'>
      <img src="3135823.png" width={100}></img>
      </div>
      <div className='friend-info'>
      <h3>{props.fullname}</h3>
      <p>{props.studplace}</p>
      <p>{props.hobby}</p>
      </div>
    </div>
  )
}
