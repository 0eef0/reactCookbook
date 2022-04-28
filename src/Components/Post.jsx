import React from 'react';
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiFillDislike
} from 'react-icons/ai'

const Post = ({post}) => {
  return (
    <div className="post">
      <img src={post.postImg} alt={post.postCaption} />
      <div id="postContent">
        <p>{post.postCaption}</p>
        {/* <div id="feedbackPanel">
          <AiOutlineLike />
        </div> */}
      </div>
    </div>
  )
}

export default Post