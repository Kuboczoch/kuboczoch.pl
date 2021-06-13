import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='stylesheet' href='/styles/reset.css' />
          <link
            rel='preload'
            href='/fonts/pixel/px437_ibm_vga8-webfont.woff2'
            as='font'
            crossOrigin='anonymous'
          />
          <link rel='stylesheet' href='/styles/pixel.css' />
          <meta name='description' content='A Personal Website of Kuboczoch' />
          {/* Autogenerated https://realfavicongenerator.net/ */}
          <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
          <link rel='manifest' href='/site.webmanifest' />
          <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#f05c2c' />
          <meta name='apple-mobile-web-app-title' content='Kuboczoch Website' />
          <meta name='application-name' content='Kuboczoch Website' />
          <meta name='msapplication-TileColor' content='#aa3d1e' />
          <meta name='theme-color' content='#1c1c1c' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
