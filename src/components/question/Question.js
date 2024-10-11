import { questions } from "../../data/questions"
import { Hr, OptionWrapper, QuestionWrapper } from "./styles"

const Question = (props) => {
    const { idx, checkedRadio, setCheckedRadio, showAnswer } = props

    const onOptionClick = (i) => {
        if(!showAnswer) setCheckedRadio(checkedRadio===i ? null : i)
    }

    return (
        <QuestionWrapper key={idx}>
            <h5>Question { idx+1 + '/' + questions.length}</h5>
            <h3>{questions[idx].question}</h3>
            <Hr aria-hidden={true} />
            {
                questions[idx].options.map((option, i) => (
                    <OptionWrapper
                        key={i} 
                        id={i}
                        onClick={() => onOptionClick(i)} 
                        bgcolor={showAnswer ? (checkedRadio===i ? '#b6e7d2' : '#eee') : (checkedRadio===i ? '#b6e7d2' : 'white')} 
                        bordercolor={showAnswer ? (i===questions[idx].correctOption ? 'green' : 'red') : 'white'}
                        disabled={showAnswer}
                        >
                        {option}
                    </OptionWrapper>
                    
                ))
            }
        </QuestionWrapper>
    )
}

export default Question