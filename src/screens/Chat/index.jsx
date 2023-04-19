import React, { useState } from 'react'
import TopBar from './../../components/TopBar'

const Chat = ({userId}) => {

  const [user, setUser] = useState({
    name: 'Test',
    status: 'online'
  })

  return (
    <div className='h-screen'>
      <TopBar backButtonEnabled={true} user={user}/>
    </div>
  )
}

Chat.defaultProps = {
  userId: 10
}


export default Chat
