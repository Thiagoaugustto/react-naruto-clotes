import { createGlobalStyle } from 'styled-components';
import bgImg from '../../images/bg.jpeg';

export const GlobalStyle = createGlobalStyle`
  body {
    background: url(${bgImg}) center no-repeat;  
    background-size: cover;
    color: #332c36;
    padding: 0;
    margin: 0;
    font-family: 'New Tegomin', serif;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f159; 
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #88888880;
  }
`;
