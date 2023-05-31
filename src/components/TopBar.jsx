import React from 'react'
import PropTypes from 'prop-types'
import { 
  MdOutlineArrowBackIosNew
} from 'react-icons/md'
import {
  BsSearch,
  BsSend
} from 'react-icons/bs'

import { useNavigate } from 'react-router-dom'


const TopBar = (props) => {
  const {
    title,
    username,
    user,
    backButtonEnabled,
    searchButtonEnabled,
    chatButtonEnabled
  } = props;

  const navigate = useNavigate();

  return (
    <div className='flex items-center h-20 text-white gap-5 justify-start w-full px-10 py-10'>
      {backButtonEnabled && (
        <MdOutlineArrowBackIosNew
          onClick={() => navigate(-1)}
          className='text-2xl hover:cursor-pointer'
        />
      )}
      {username && (
        <div className="text-2xl font-medium w-full text-center">{ username }</div>
      ) ||
      user && (
        <div className='flex flex-col items-start'>
          <div className="text-2xl">{ user.name }</div>
          <div className="font-light text-xs flex items-center gap-2">
            {user.status === 'online' ? (
              <figure className="h-3 w-3 rounded-full bg-green-500"></figure>
            ) : <figure className="h-3 w-3 rounded-full bg-gray-500"></figure> }
            { user.status }
          </div>
        </div>
      ) ||
      title && (
        <div className="md:ml-4 text-5xl font-['Grand_Hotel']">{ title }</div>
      )}
      
      {(searchButtonEnabled && chatButtonEnabled) && (
        <div className="text-white flex gap-6 text-2xl ml-auto">
          <BsSearch
            className='hover:cursor-pointer'
            // onClick={() => navigate('')}
          />
          <BsSend
            className='hover:cursor-pointer'
            onClick={() => navigate('/chat')}
          />
        </div>
      )}
    </div>
  )
}

TopBar.propTypes = {
  title: PropTypes.string,
  username: PropTypes.string,
  user: PropTypes.object,
  backButtonEnabled: PropTypes.bool,
  searchButtonEnabled: PropTypes.bool,
  chatButtonEnabled: PropTypes.bool
}

TopBar.defaultProps = {
  title: 'Instagramn\'t',
  backButtonEnabled: false,
  searchButtonEnabled: true,
  chatButtonEnabled: true
}

export default TopBar
