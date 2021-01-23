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
