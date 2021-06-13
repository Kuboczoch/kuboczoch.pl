import { css, cx } from '@emotion/css'
import React from 'react'

import { IHomePageProps } from '../../pages/index'
import { IHomePageStateProps } from './useHomePage'

import HomePage from '../../components/blocks/HomePage'
import Container from '../../components/elements/Container'
import Box from '../../components/blocks/Box'
import { TypographyH1, TypographyH2, TypographyP } from '../../components/elements/Typography'
import blinker from '../../assets/styleHelper/animations/blinker'
import cray from '../../assets/styleHelper/animations/cray'
import theme from '../../assets/theme'

interface IHomePageViewProps extends IHomePageProps, IHomePageStateProps {}

const HomePageView = ({}: IHomePageViewProps) => (
  <HomePage>
    <Container>
      <Box>
        <TypographyH1>
          Hello<span className={blinker}>!</span>
        </TypographyH1>
        <TypographyH2>This is my official website</TypographyH2>
        <TypographyP>
          My nickname is{' '}
          <span
            className={cx(
              cray,
              css`
                color: ${theme.colors.dodgerBlue};
              `
            )}
          >
            Kuboczoch
          </span>{' '}
          and i own this place
        </TypographyP>
        <TypographyH2>My career</TypographyH2>
        <TypographyP>
          The primary area of my interest is undoubtedly front-end. My passion for code had begun
          nearly ten years ago when I discovered the power of CSS and JavaScript
        </TypographyP>
        <TypographyP>
          I currently work in a small constantly growing IT Company where I'm developing my skills
          and learning new technologies
        </TypographyP>
        <TypographyH2>For common users:</TypographyH2>
        <TypographyP>
          I hope you will be glad to read this full of secrets and unknowns page
        </TypographyP>
        <TypographyH2>Of course</TypographyH2>
        <TypographyP>
          This is not the final version of my site, it develops depending on my free time
        </TypographyP>
      </Box>
    </Container>
  </HomePage>
)

export default HomePageView
