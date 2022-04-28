import React, { useState, useEffect } from 'react';
import Post from '../Components/Post';
import axios from 'axios';

const Blog = () => {
    const [blogposts, setBlogposts] = useState([]);

    const getBlogposts = async () => {
        const { data: { blogpost } } = await axios.get('https://roldan-personal-recipes.herokuapp.com/api/v1/blogposts');
        setBlogposts(blogpost);
    }

    useEffect(() => {
        getBlogposts();
    }, []);

  return (
    <div id="blogposts">
      {
          blogposts.map(post => {
              return <Post post={post} key={post.postCaption} />
          }) 
      }
    </div>
  )
}

export default Blog