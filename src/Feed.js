import React, { useEffect, useState } from 'react'
import StoryTime from "./StoryTime"
import MessageSender from "./MessageSender"
import Post from './Post'
import db from './firebase'

function Feed() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
      db.collection('posts').orderBy('timestamp', 'desc').onSnapshot((snapshot) =>
          setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      )
  }, [])
  return (
    <div className="Feed">
    <StoryTime/>
    <MessageSender/>
    {posts.map((post) => (
      <Post
          key={post.data.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
      />
  ))}
    </div>
  )
}

export default Feed