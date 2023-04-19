import React from 'react'
import PhotoItem from './PhotoItem'

const PhotoGrid = ({ posts }) => {
  return (
    <div className='grid grid-cols-3 bg-black w-full'>
      {posts?.map((post, index) => <PhotoItem key={index} post={post} />)}
    </div>
  )
}

export default PhotoGrid
