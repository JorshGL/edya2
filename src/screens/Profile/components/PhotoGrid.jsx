import React from 'react'
import PhotoItem from './PhotoItem'

const PhotoGrid = ({ posts }) => {
  return (
    <div className='grid grid-cols-3 bg-black w-full pt-7'>
      {posts?.map((post, index) => <PhotoItem key={index} post={post} />)}
    </div>
  )
}

export default PhotoGrid
