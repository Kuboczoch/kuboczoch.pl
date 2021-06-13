import React, { ReactChild } from 'react'
import Head from 'next/head'

import Providers from './Providers'
import Page from '../../blocks/Page'

import { ILayoutData } from '../../../utils/contentful/models/getLayoutData'

export interface LayoutProps extends ILayoutData {
  children: ReactChild
  title?: string
}

const Layout = ({ title = 'Kuboczoch Website', children, ...props }: LayoutProps) => (
  <Providers>
    <Head>
      <title>{title}</title>
    </Head>
    <Page>
      <Page.Content {...props} children={children} />
    </Page>
  </Providers>
)

export default Layout
