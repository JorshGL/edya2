import React from 'react'
import PropTypes from 'prop-types'
import { 
  MdKeyboardBackspace,
  MdOutlineSearch,
  MdChatBubbleOutline
} from 'react-icons/md'
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
    <div className='flex items-center p-4 h-20 text-white gap-5 justify-start w-full md:px-10 md:py-10'>
      {backButtonEnabled && (
        <MdKeyboardBackspace
          onClick={() => navigate(-1)}
          className='text-5xl hover:cursor-pointer'
        />
      )}
      {username && (
        <div className="text-3xl font-medium">{ username }</div>
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
        <div className="text-white text-3xl flex gap-3 md:text-5xl md:gap-6 ml-auto">
          <MdOutlineSearch
            className='hover:cursor-pointer'
            // onClick={() => navigate('')}
          />
          <MdChatBubbleOutline
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
