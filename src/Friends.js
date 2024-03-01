import React from 'react'
import Friend from './Friend'

export default function Friends(props) {

  let friendsData = props.friends

  // const [friends_data, setFriends] = useState(friendsData)
  // const [text, setText] = useState("")
  // const [postTitle, setTitle] = useState("")

  // const addNewPost = () => {
  //   const newPost = {
  //     id: Date.now, 
  //     fullname,
  //     studyplace,
  //     profilePicture
  //   }
  //   setPosts([...friends_data, newFriend])
  //   setfullname("")
  //   setStudyplace("")
  //   setprofilePicture("")
  // }
  
  let friends_elements= props.data.map(p => {
    return <Friend fullname={p.fullname} studplace={p.studplace} hobby={p.hobby}/>
  })


  return (
    <div className='friends'>
      {friends_elements}
    </div>
  )
}
