/** @jsxImportSource @emotion/react */

'use client'

import { Button, Textarea } from '@worldresources/wri-design-systems'
import { SendIcon } from '../icons';
import { chatContainerStyles, chatInputStyles, chatResponsesContainerStyles, chatResponseStyles } from './styles';
import { useCallback, useState } from 'react';
import Markdown from 'react-markdown'

const Chat = () => {
  const [request, setRequest] = useState('')
  const [chatResponse, setChatResponse] = useState<{ role: string, content: string }[]>([])
  const [loading, setLoading] = useState(false)

  const sendRequest = useCallback(async () => {
    setLoading(true)

    console.log(11, request)
    const actualResponse = [...chatResponse]

    actualResponse.push({
      role: 'user',
      content: request
    })

    setRequest('')

    const jsonResponse = await fetch('http://localhost:3000/api/prompt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: request })
    })

    const response = await jsonResponse.json()
    console.log(22, response)

    if (response?.answer) {
      actualResponse.push({
        role: 'assistant',
        content: response.answer
      })
    } else {
      actualResponse.push({
        role: 'assistant',
        content: 'Sorry, no meooooow information.....'
      })
    }

    setChatResponse(actualResponse)
    setLoading(false)
  }, [chatResponse, request])

  const preSendRequest = () => {
    const actualResponse = [...chatResponse]

    actualResponse.push({
      role: 'user',
      content: request
    })

    setChatResponse(actualResponse)

    setTimeout(() => {
      sendRequest()
    }, 200)
  }

  return (
    <div css={chatContainerStyles}>
      <div css={chatResponsesContainerStyles}>
        {chatResponse.map((item, idx) => (
          <div key={`item.content-${idx}`} css={chatResponseStyles(item.role)}>
            <Markdown>
              {item.content}
            </Markdown>
          </div>
        ))}
      </div>
      <div css={chatInputStyles}>
        <Textarea
          label=''
          placeholder='Ask something...'
          onChange={(e) => setRequest(e.target.value)}
          value={request}
        />
        <Button leftIcon={<SendIcon />} onClick={preSendRequest} loading={loading} />
      </div>
    </div>
  );
}

export default Chat
