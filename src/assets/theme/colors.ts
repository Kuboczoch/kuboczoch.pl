export type TColor =
  | 'transparent'
  | 'white'
  | 'black'
  | 'codGray'
  | 'portage'
  | 'dandelion'
  | 'dodgerBlue'
  | 'gallery'

/**
 List of possible colors in your app.
 This is used for better color management and suggestions from your *Editor*.
 You should *avoid* using it directly if there is a color in your palette that represents it; like `primary` or `secondary`.

 Every index must have a comment: `@color #ffffff rgb(255,255,255)` with a hex value that represents a color.
 It helps to identify the desired color from this list.
 **/

const colors: {
  [index in TColor]: string
} = {
  // @color transparent
  transparent: 'transparent',
  // @color #ffffff rgb(255,255,255)
  white: '#ffffff',
  // @color #000000 rgb(0,0,0)
  black: '#000000',
  // @color #1C1C1C rgb(28,28,28)
  codGray: '#1C1C1C',
  // @color #AB9DF2 rgb(171,157,242)
  portage: '#AB9DF2',
  // @color #FFD866 rgb(255,216,102)
  dandelion: '#FFD866',
  // @color #407DFF rgb(64,125,255)
  dodgerBlue: '#407DFF',
  // @color #F0F0F0 rgb(240,240,240)
  gallery: '#F0F0F0'
}

export default colors
