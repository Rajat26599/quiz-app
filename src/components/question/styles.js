import styled from "styled-components";

export const QuestionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const OptionWrapper = styled.div`
    text-align: left;
    background: ${props => props.bgcolor};
    padding: 0px 10px;
    margin: 5px;
    border-radius: 10px;
    width: 50%;
    cursor: pointer;
    border: 2px solid ${props => props.bordercolor};
`

export const Hr = styled.hr`
    width: 100%;
    margin-top: 10px;
    margin-bottom: 20px;
`