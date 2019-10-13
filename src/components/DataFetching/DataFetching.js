import axios from 'axios'
import React, { useState, useEffect } from 'react'

export default function DataFetching() {
  const [postId, setPostId] = useState(1)
  const [post, setPost] = useState({})
  const [id, setId] = useState(1)

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(res => {
        console.log(res)
        setPost(res.data)
      }).catch(err => {
        console.log(err)
      })
  }, [postId])

  return (
    <div>
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      <button type="button" onClick={() => setPostId(id)}>Fetch Post</button>

      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  )
}
