'use client'

import ChatButton from '@/components/Chat/Button'
import ChatContainer from '@/components/Chat/Container'
import { useState } from 'react'

const Home = () => {
  const [openChat, setOpenChat] = useState(false)

  return (
    <div className='app-container'>
      <ChatButton onClick={() => setOpenChat(!openChat)} />
      {openChat ? <ChatContainer onClose={() => setOpenChat(false)} /> : null}
    </div>
  )
}

export default Home
