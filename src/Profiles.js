import React from 'react'
import Profile from './Profile'

export default function Profiles(props) {
  return (
    <div>
      <Profile name={props.data[0].name} profession={props.data[0].profession} followers={props.data[0].followers} friends={props.data[0].friends} rating={props.data[0].rating}/>
      <Profile name={props.data[1].name} profession={props.data[1].profession} followers={props.data[1].followers} friends={props.data[1].friends} rating={props.data[1].rating}/>
      <Profile name={props.data[2].name} profession={props.data[2].profession} followers={props.data[2].followers} friends={props.data[2].friends} rating={props.data[2].rating}/>
    </div>
  )
}
