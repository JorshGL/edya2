import React from 'react'
import { useNavigate } from 'react-router-dom'

const PhotoItem = ({ post }) => {
  const navigate = useNavigate();

  return (
    <div className='overflow-hidden' onClick={() => navigate(`/post/${post.id}/comments`)}>
      <img className='aspect-square object-cover' src={post.image} alt="" />
    </div>
  )
}

export default PhotoItem
