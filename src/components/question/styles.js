import styled from "styled-components";
import { fromRight } from "../../util/animations/fromRight";
import { fadeIn } from "../../util/animations/fadeIn";

export const QuestionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: ${fromRight} 0.2s ease, ${fadeIn} 0.2s ease;
`

export const OptionWrapper = styled.p`
    text-align: left;
    background: ${props => props.bgcolor};
    padding: 10px 10px;
    margin: 5px;
    border-radius: 10px;
    width: 50%;
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    border: 2px solid ${props => props.bordercolor};

    @media only screen and (max-width: 720px) {
        width: 75%;
    }
`

export const Hr = styled.hr`
    width: 100%;
    margin-top: 10px;
    margin-bottom: 20px;
`