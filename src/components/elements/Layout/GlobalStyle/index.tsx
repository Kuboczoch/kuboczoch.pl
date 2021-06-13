import { injectGlobal } from '@emotion/css'

import resetStyle from './resetStyle'
import animationsStyle from './animationsStyle'

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
   }
 
  ${animationsStyle};
`

export default GlobalStyle
