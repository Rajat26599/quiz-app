import { keyframes } from "styled-components";

export const fromRight = keyframes`
    0% { 
        transform: translate(100px);
        opacity: 0;
    }
    100% { 
        transform: translate(0px);
        opacity: 1;
    }
`