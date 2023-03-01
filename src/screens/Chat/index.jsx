import React from 'react'
import TopBar from './../../components/TopBar'

const Chat = (props) => {
  const {
    user
  } = props;

  return (
    <div className='bg-black h-screen'>
      <TopBar backButtonEnabled={true} user={user}/>
    </div>
  )
}

Chat.defaultProps = {
  user: {
    name: 'Test user',
    status: 'online'
  }
}


export default Chat
