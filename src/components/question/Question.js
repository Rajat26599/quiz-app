import { questions } from "../../data/questions"
import { Hr, OptionWrapper, QuestionWrapper } from "./styles"

const Question = (props) => {
    const { idx, checkedRadio, setCheckedRadio, showAnswer } = props

    const onOptionClick = (i) => {
        if(!showAnswer) setCheckedRadio(checkedRadio===i ? null : i)
    }

    return (
        <QuestionWrapper>
            <h5>Question { idx+1 + '/' + questions.length}</h5>
            <h3>{questions[idx].question}</h3>
            <Hr />
            {
                questions[idx].options.map((option, i) => (
                    <OptionWrapper
                        key={i} 
                        id={i}
                        onClick={() => onOptionClick(i)} 
                        bgcolor={showAnswer ? '#fee' : checkedRadio===i ? '#feb4c1' : 'white'} 
                        bordercolor={showAnswer ? (i===questions[idx].correctOption ? 'green' : 'red') : 'white'}
                        >
                        <p>{option}</p>
                    </OptionWrapper>
                    
                ))
            }
        </QuestionWrapper>
    )
}

export default Question