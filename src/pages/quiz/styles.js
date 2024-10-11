import styled from "styled-components";

export const QuizWrapper = styled.div`
    background-image: url('https://img.freepik.com/free-photo/medical-instrument-with-alarm-clock-succulent-plant-plain-surface_23-2148213948.jpg');
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100vw;
`
export const CardWrapper = styled.div`
    height: 75%;
    width: 50%;

    @media only screen and (max-width: 720px) {
        height: 100vh;
        width: auto;
        margin-top: -30px;
    }
`
export const Card = styled.div`
    background-color: #eeeeee;
    padding: 20px;
    text-align: center;
    box-shadow: 5px 5px 25px gray;

    @media only screen and (max-width: 720px) {
        height: 100vh;
        width: 100vw;
    }
`
export const Progress = styled.progress`
    width: 100%;
    margin-bottom: -5px;
`
export const Image = styled.img`
    width: 100%;
`