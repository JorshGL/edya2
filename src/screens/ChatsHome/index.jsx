import React from 'react'
import TopBar from './../../components/TopBar'

const ChatsHome = () => {
  return (
    <div className='bg-black h-screen'>
      <TopBar backButtonEnabled={true} title={'Chats'}/>
    </div>
  )
}

export default ChatsHome
