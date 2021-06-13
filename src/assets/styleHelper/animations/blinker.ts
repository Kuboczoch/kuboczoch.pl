import { keyframes } from '@emotion/react'
import { css } from '@emotion/css'

export const blinkerKeyframe = keyframes`
  to {
    visibility: hidden;
  }
`

const blinker = css`
  animation: ${blinkerKeyframe} 1s steps(3, start) infinite;
`

export default blinker
