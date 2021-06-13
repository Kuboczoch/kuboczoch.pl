import styled from '@emotion/styled'

const TypographyH1 = styled('h1')`
  display: inline-block;
  box-shadow: inset 0 -0.5rem 0 ${(props) => props.theme.colors.dandelion};
  color: ${(props) => props.theme.colors.dandelion};
  font-size: 4em;
  line-height: 0.9;
  text-transform: uppercase;
  font-family: Pixel, monospace;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: 3em;
  }
`

export default TypographyH1
