import { css } from '@emotion/react'

export const chatButtonContainerStyles = css`
  position: absolute;
  bottom: 30px;
  right: 30px;
`

export const chatButtonStyles = css`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid #DE9E00;
  box-shadow: 0px 2px 4px -2px #0000001A;
  box-shadow: 0px 4px 6px -1px #0000001A;
`

export const chatWindowContainerStyles = css`
  position: absolute;
  bottom: 100px;
  right: 30px;
  width: 384px;
  height: auto;
  border: 1px solid #C9C9C9;
  border-radius: 8px;
  padding: 12px;
  background-color: #FFFFFF;
  box-shadow: 0px 4px 6px -4px #0000001A;
  box-shadow: 0px 10px 15px -3px #0000001A;
  
  div.header {
    display: flex;
    justify-content: space-between;
    gap: 8px;
  }

  p {
    font-size: 14px;
    line-height: 20px;
    color: #3D3B3B;
    margin-bottom: 16px;
  }
`

export const chatAvailableContainerStyles = css`
  display: flex;
`

export const availableStyles = css`
  margin-left: 12px;

  p {
    margin-bottom: 0px !important;
    color: #5C5959
    font-size: 12px !important;
  }

  p.name {
    color: #3D3B3B;
    font-size: 20px;
    font-weight: 700;
  }
`

export const chatContainerStyles = css`
  /* max-height: 600px; */
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;

`

export const chatResponsesContainerStyles = css`
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-height: 600px;
  overflow-y: scroll;
  margin-bottom: 20px;
`

export const chatResponseStyles = (role: string) => css`
  width: 92%;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 0px !important;

  ${role === 'user' ? `
    background-color: #FCEFD3;
    margin-left: 27px;
    border: 1px solid #F5BF4F;
  ` : `
    border: 1px solid #E7E6E6;
  `}

  p {
    margin-bottom: 6px !important;
  }

  li, strong, a {
    font-size: 14px;
  }

  h3 {
    font-size: 16px;
    font-weight: 700;
    margin-top: 20px;
  }

  a {
    color: #AD7500;
    text-decoration: underline;
  }
`

export const chatInputStyles = css`
  display: flex;
  justify-content: space-between;
  gap: 12px;

  textarea {
    width: 298px;
    margin-top: 0;
  }
`
