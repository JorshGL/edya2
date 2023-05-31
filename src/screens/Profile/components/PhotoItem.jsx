import React from 'react'
import { useNavigate } from 'react-router-dom'

const PhotoItem = ({ post }) => {
  const navigate = useNavigate();

  return (
    <div className='overflow-hidden cursor-pointer' onClick={() => navigate(`/post/${post._id}`)}>
      <img className='aspect-square object-cover' src={post.photo} alt="" />
    </div>
  )
}

export default PhotoItem
