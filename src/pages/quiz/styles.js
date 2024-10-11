import styled from "styled-components";

export const QuizWrapper = styled.div`
    background-color: pink;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
`
export const CardWrapper = styled.div`
    height: 75%;
    width: 75%;

    @media only screen and (max-width: 720px) {
        height: 100vh;
        width: auto;
        margin-top: -30px;
    }
`
export const Card = styled.div`
    background-color: #ffdce2;
    padding: 20px;
    text-align: center;

    @media only screen and (max-width: 720px) {
        height: 100vh;
        width: 100vw;
    }
`
export const Progress = styled.progress`
    width: 100%;
    margin-bottom: -5px;
`