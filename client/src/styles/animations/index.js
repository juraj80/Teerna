import { keyframes } from 'styled-components';

export const ALoading = keyframes`
 0% {
    top: 40px;
    left: 40px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: -1px;
    left: -1px;
    width: 80px;
    height: 80px;
    opacity: 0;
  }
`;

export const ARed = keyframes`
 0% {
    height: 30px;
    width: 0;
    border-width: 5px;
  }
  55% {
    height: 13px;
    width: 27px;
    border-width: 10px;
  }
  
  70% {
    height: 20px;
    width: 20px;
    border-width: 10px;
  }
  
  85% {
    height: 15px;
    width: 25px;
    border-width: 10px;
  }
  
  100% {
    height: 20px;
    width: 20px;
    border-width: 10px;
  }`;

export const AGreen = keyframes`
   0% {
    height: 20px;
    width: 20px;
    border-width: 10px;
  }
  25%, 55%, 85% {
    height: 30px;
    width: 5px;
    border-width: 5px;
  }
  
  40%, 70%, 100% {
    height: 30px;
    width: 0;
    border-width: 5px;
  }`;
