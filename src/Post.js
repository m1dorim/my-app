import React, { useState } from 'react'

export default function Post(props) {

const [like, setLike] = useState(0);
const [dislike, setDislike] = useState(0);

function likeMyPost() {
  setLike(like + 1);
}

function dislikeMyPost() {
  setDislike(dislike + 1)
}

  let loan_ref = React.createRef()

  function changeText() {
    loan_ref.current.innerText = "Эта новость не правда"
  }
  return (
    <div className='post'>
      <p ref={loan_ref} onClick={changeText}>{props.text}</p>
      <h1>{props.postTitle}</h1>
      <h4>Лайк: {like}</h4>
      <h4>Дизлайк: {dislike}</h4>
      <button className='like-btn' onClick={likeMyPost}>Лайк</button>
      <button className='dislike-btn' onClick={dislikeMyPost}>Дизлайк</button>
      <button className='delete-btn' onClick={() => props.deletePost(props.id)}>Удалить</button>
    </div>
  )
}
