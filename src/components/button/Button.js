import { Animated, ButtonIcon, ButtonText } from "./styles"

const Button = (props) => {
    const { children, onClick, disabled } = props
    return (
        <Animated
            onClick={onClick}
            disabled={disabled}
            >
            <ButtonText>{children}</ButtonText>
            <ButtonIcon>→</ButtonIcon>
        </Animated>
    )
}

export default Button