import axios from 'axios'
import React, { useState, useEffect } from 'react'

export default function DataFetchingOne() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [post, setPost] = useState({})

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
        setLoading(false)
        setPost(response.data)
        setError('')
      })
      .catch(error => {
        setLoading(false)
        setPost({})
        setError('Something went terribly wrong!')
      })
  }, [])

  return (
    <div>
      {loading ? 'Loading...' : post.title}
      {error ? error : null}
    </div>
  )
}
