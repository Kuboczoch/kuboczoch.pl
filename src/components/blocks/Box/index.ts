import styled from '@emotion/styled'

const Box = styled('div')`
  position: relative;
  padding: 15px 30px 30px;
  margin-bottom: 80px;
  transform: skewY(-3deg);

  &::before {
    position: absolute;
    background-color: ${(props) => props.theme.colors.codGray};
    border: 3.5px solid ${(props) => props.theme.colors.portage};
    bottom: 1px;
    box-shadow: 7px 24px 0 ${(props) => props.theme.colors.portage};
    content: '';
    left: 1px;
    margin-right: 1ch;
    right: 1px;
    top: 1px;
    z-index: -1;
  }
`

export default Box
