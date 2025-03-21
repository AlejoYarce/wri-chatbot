/** @jsxImportSource @emotion/react */

'use client'

import { Button } from '@worldresources/wri-design-systems';
import { chatButtonContainerStyles, chatButtonStyles } from './styles';
import { MessageIcon } from '../icons';

const ChatButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <div css={chatButtonContainerStyles}>
      <Button css={chatButtonStyles} onClick={onClick} leftIcon={<MessageIcon />} />
    </div>
  );
}

export default ChatButton
