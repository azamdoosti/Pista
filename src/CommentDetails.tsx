import React from 'react'
import { faker } from "@faker-js/faker";


const CommentDetails = ({author,time,content}) => {
    // console.log(props)
  return (
    <div>
      <div className="comment">
        <a href="/" className="avatar">
          <img src={faker.image.avatar()} alt="avatar" />
        </a>
        <div className="content">
          <a href="/" className="author">
            {author}
          </a>
          <div className="metadata">
            <span className="data"> {time} </span>
          </div>
          <div className="text"> {content}</div>
        </div>
      </div>
    </div>
  )
}

export default CommentDetails
