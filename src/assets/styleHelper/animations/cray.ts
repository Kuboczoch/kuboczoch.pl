import { css, keyframes } from '@emotion/css'

export const crayKeyframe = keyframes`
  2% {
    font-style: italic;
  font-weight: 500;
  text-decoration: none;
  text-transform: none; }
  4% {
    font-style: normal;
  font-weight: 600;
  text-decoration: none;
  text-transform: none; }
  6% {
    font-style: normal;
  font-weight: 600;
  text-decoration: none;
  text-transform: none; }
  8% {
    font-style: normal;
  font-weight: 500;
  text-decoration: none;
  text-transform: none; }
  10% {
    font-style: italic;
  font-weight: 600;
  text-decoration: line-through;
  text-transform: none; }
  12% {
    font-style: normal;
  font-weight: 500;
  text-decoration: underline;
  text-transform: none; }
  14% {
    font-style: normal;
  font-weight: 700;
  text-decoration: none;
  text-transform: none; }
  16% {
    font-style: italic;
  font-weight: 600;
  text-decoration: line-through;
  text-transform: lowercase; }
  18% {
    font-style: normal;
  font-weight: 600;
  text-decoration: none;
  text-transform: none; }
  20% {
    font-style: normal;
  font-weight: 200;
  text-decoration: none;
  text-transform: lowercase; }
  22% {
    font-style: normal;
  font-weight: 400;
  text-decoration: none;
  text-transform: none; }
  24% {
    font-style: normal;
  font-weight: 700;
  text-decoration: none;
  text-transform: lowercase; }
  26% {
    font-style: normal;
  font-weight: 400;
  text-decoration: none;
  text-transform: none; }
  28% {
    font-style: normal;
  font-weight: 100;
  text-decoration: underline;
  text-transform: none; }
  30% {
    font-style: italic;
  font-weight: 100;
  text-decoration: none;
  text-transform: uppercase; }
  32% {
    font-style: italic;
  font-weight: 700;
  text-decoration: line-through;
  text-transform: lowercase; }
  34% {
    font-style: normal;
  font-weight: 600;
  text-decoration: none;
  text-transform: none; }
  36% {
    font-style: italic;
  font-weight: 100;
  text-decoration: none;
  text-transform: none; }
  38% {
    font-style: normal;
  font-weight: 600;
  text-decoration: none;
  text-transform: none; }
  40% {
    font-style: normal;
  font-weight: 700;
  text-decoration: none;
  text-transform: capitalize; }
  42% {
    font-style: italic;
  font-weight: 500;
  text-decoration: none;
  text-transform: none; }
  44% {
    font-style: italic;
  font-weight: 300;
  text-decoration: none;
  text-transform: none; }
  46% {
    font-style: italic;
  font-weight: 400;
  text-decoration: none;
  text-transform: none; }
  48% {
    font-style: italic;
  font-weight: 400;
  text-decoration: none;
  text-transform: lowercase; }
  50% {
    font-style: normal;
  font-weight: 600;
  text-decoration: line-through;
  text-transform: none; }
  52% {
    font-style: normal;
  font-weight: 300;
  text-decoration: underline;
  text-transform: none; }
  54% {
    font-style: normal;
  font-weight: 100;
  text-decoration: none;
  text-transform: none; }
  56% {
    font-style: normal;
  font-weight: 400;
  text-decoration: none;
  text-transform: none; }
  58% {
    font-style: normal;
  font-weight: 700;
  text-decoration: underline;
  text-transform: none; }
  60% {
    font-style: normal;
  font-weight: 200;
  text-decoration: none;
  text-transform: none; }
  62% {
    font-style: italic;
  font-weight: 200;
  text-decoration: none;
  text-transform: none; }
  64% {
    font-style: italic;
  font-weight: 100;
  text-decoration: none;
  text-transform: none; }
  66% {
    font-style: italic;
  font-weight: 500;
  text-decoration: none;
  text-transform: none; }
  68% {
    font-style: italic;
  font-weight: 400;
  text-decoration: underline;
  text-transform: uppercase; }
  70% {
    font-style: normal;
  font-weight: 100;
  text-decoration: none;
  text-transform: none; }
  72% {
    font-style: normal;
  font-weight: 300;
  text-decoration: none;
  text-transform: uppercase; }
  74% {
    font-style: italic;
  font-weight: 200;
  text-decoration: none;
  text-transform: none; }
  76% {
    font-style: normal;
  font-weight: 300;
  text-decoration: none;
  text-transform: none; }
  78% {
    font-style: normal;
  font-weight: 500;
  text-decoration: none;
  text-transform: uppercase; }
  80% {
    font-style: normal;
  font-weight: 400;
  text-decoration: line-through;
  text-transform: none; }
  82% {
    font-style: normal;
  font-weight: 600;
  text-decoration: underline;
  text-transform: lowercase; }
  84% {
    font-style: normal;
  font-weight: 400;
  text-decoration: line-through;
  text-transform: capitalize; }
  86% {
    font-style: normal;
  font-weight: 300;
  text-decoration: none;
  text-transform: uppercase; }
  88% {
    font-style: normal;
  font-weight: 600;
  text-decoration: line-through;
  text-transform: none; }
  90% {
    font-style: normal;
  font-weight: 700;
  text-decoration: none;
  text-transform: capitalize; }
  92% {
    font-style: italic;
  font-weight: 300;
  text-decoration: none;
  text-transform: none; }
  94% {
    font-style: normal;
  font-weight: 300;
  text-decoration: line-through;
  text-transform: none; }
  96% {
    font-style: italic;
  font-weight: 700;
  text-decoration: underline;
  text-transform: none; }
  98% {
    font-style: normal;
  font-weight: 400;
  text-decoration: none;
  text-transform: none; }
  `

const cray = css`
  animation: ${crayKeyframe} 6s infinite steps(50);
`

export default cray
