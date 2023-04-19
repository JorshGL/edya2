import React from 'react'

const PhotoItem = ({ post }) => {
  return (
    <div className='aspect-square'>
      <img className='object-cover' src={post.image} alt="" />
    </div>
  )
}

export default PhotoItem
