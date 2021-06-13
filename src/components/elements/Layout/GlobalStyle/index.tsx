import { injectGlobal } from '@emotion/css'

import resetStyle from './resetStyle'
import animationsStyle from './animationsStyle'
import theme from '../../../../assets/theme'

const GlobalStyle = injectGlobal`
  ${resetStyle};

   html {
     overflow-y: scroll;
   }

   body {
     font-size: 24px;
     line-height: 1.2;
     color: #333333;
     overflow-x: hidden;
     font-weight: 400;

     @media (max-width: ${theme.breakpoints.sm}) {
       font-size: 20px;
     }
   }
 
  ${animationsStyle};
`

export default GlobalStyle
