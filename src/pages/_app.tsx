import { ThemeProvider } from '@emotion/react'
import React from 'react'
import { AppProps } from 'next/app'

import GlobalStyle from '../components/elements/Layout/GlobalStyle'
import theme from '../assets/theme'

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    {GlobalStyle}
    <Component {...pageProps} />
  </ThemeProvider>
)

export default App
