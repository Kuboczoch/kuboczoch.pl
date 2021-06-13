import styled from '@emotion/styled'

const Content = styled('main')`
  position: relative;
  grid-area: content;
  min-height: 125px;
  z-index: 1;
  margin-top: 80px;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    margin-top: 20px;
  }
`

export default Content
