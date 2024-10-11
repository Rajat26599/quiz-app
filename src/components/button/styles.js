import styled from "styled-components";

export const ButtonText = styled.span`
    display: inline-block;
    transition: transform 0.3s ease;
`
export const ButtonIcon = styled.span`
    position: absolute;
    right: -20px;
    transition: right 0.3s ease;
`
export const Animated = styled.button`
    padding: 12px 40px;
    font-size: 16px;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    transition: all 0.3s ease;
    background-color: ${props => props.disabled ? '#ccc' : '#50c469'};
    color: white;
    overflow: hidden;
    position: relative;

    &:hover {
        ${ButtonText} {
            transform: translateX(-20px);
        }
        ${ButtonIcon} {
            right: 20px;
        }
    }
`