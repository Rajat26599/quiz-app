import styled from "styled-components";
import { fadeIn } from "../../util/animations/fadeIn";

export const ResultWrapper = styled.div`
    -moz-box-sizing: border-box; 
    -webkit-box-sizing: border-box; 
    box-sizing: border-box; 
    animation: ${fadeIn} 1s ease;
`
export const Image = styled.img`
    width: 100%;
`