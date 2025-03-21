/** @jsxImportSource @emotion/react */

'use client'

import { Button, IconButton } from '@worldresources/wri-design-systems';
import { availableStyles, chatAvailableContainerStyles, chatWindowContainerStyles } from './styles';
import { AvatarIcon } from '../icons';
import { CloseIcon } from '../icons/Close';
import Chat from '@/components/Chat'
import { useState } from 'react';

const AskQuestion = ({ onClose }: { onClose: () => void }) => {
  const [showChat, setShowChat] = useState(false)

  return (
    <div css={chatWindowContainerStyles}>
      <div className='header'>
        <div css={chatAvailableContainerStyles}>
          <AvatarIcon />
          {showChat ?
            <div css={availableStyles}>
              <p className='name'>Ollie</p>
              <p>Available now</p>
            </div>
            : null}
        </div>
        {!showChat ? <p>
          Hey there! I’m Ollie, your guide to finding the right WRI tool. Tell me what you’re looking for, and I’ll help you navigate your options.
          The more details, the better!
        </p> : null}

        <IconButton icon={<CloseIcon />} onClick={onClose} />
      </div>
      {!showChat ?
        <Button label='Ask a question' onClick={() => setShowChat(true)} />
        : <Chat />}
    </div>
  );
}

export default AskQuestion
