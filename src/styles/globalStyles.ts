import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
 ${reset}
 * {
   box-sizing:border-box;
   outline:none;
   border:none;
 }
 body{
  font-family: 'Noto Sans KR', sans-serif;
 }
 ul{
  list-style: none;
 }
 a {
  text-decoration: none;
 }
`;

export default GlobalStyles;
