import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3001/getposts")
      .then(post => setPosts(post.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='posts_container'>
      {
        posts.map((post, i) => (
          <Link to={`/post/${post._id}`} key={i} className='post'>
            <img src={`http://localhost:3001/Images/${post.file}`} alt="" />
            <div className='post_text'>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default Home