import { useEffect, useState } from "react"
import Question from "../../components/question/Question"
import { questions } from "../../data/questions"
import { Card, CardWrapper, Progress, QuizWrapper, SubmitButton } from "./styles"
import Result from "../../components/result/Result"
import Button from "../../components/button/Button"

const Quiz = () => {
    const [ currentQuestion, setCurrentQuestion ] = useState(0)
    const [ checkedRadio, setCheckedRadio ] = useState(null)
    const [ showResult, setShowResult ] = useState(false)
    const [ resultArr, setResultArr ] = useState([])
    const [ hasBegun, setHasBegun ] = useState(false)
    const [ showAnswer, setShowAnswer ] = useState(false)

    const nxtQues = () => {
        if(checkedRadio!==null) setCheckedRadio(null)
        if(currentQuestion < questions.length-1) setCurrentQuestion(currentQuestion+1)
        else setShowResult(true)
    }
    const validateResponse = () => {
        let temp = resultArr
        temp[currentQuestion] = checkedRadio===questions[currentQuestion].correctOption
        setResultArr(temp)
    }
    const onStart = () => {
        setHasBegun(true)
    }
    const onDone = () => {
        setCurrentQuestion(0)
        setCheckedRadio(null)
        setShowResult(false)
        setResultArr([])
        setHasBegun(false)
    }
    const onSubmit = () => {
        validateResponse()
        setShowAnswer(true)
    }
    const onNext = () => {
        nxtQues()
        setShowAnswer(false)
    }
    useEffect(() => {
        console.log(checkedRadio)
    }, [checkedRadio])

    return (
        <QuizWrapper>
            <CardWrapper>
                <Progress value={showResult ? questions.length : currentQuestion} max={questions.length}></Progress>
                <Card>
                    {
                        hasBegun ?
                            showResult ?
                                <>
                                    <Result resultArr={resultArr} /><br />
                                    <Button onClick={onDone}>Done</Button>
                                </>
                            :
                                <>
                                    <Question 
                                        idx={currentQuestion} 
                                        checkedRadio={checkedRadio} 
                                        setCheckedRadio={setCheckedRadio} 
                                        showAnswer={showAnswer}
                                        />
                                    <br />
                                    {
                                        showAnswer ?
                                            <Button onClick={onNext} disabled={checkedRadio===null}>Next</Button>
                                        :
                                            <Button onClick={onSubmit} disabled={checkedRadio===null}>Submit</Button>
                                    }
                                </>
                        :
                            <>
                                <h3>Let's see how much you know about Lilly</h3> <br />
                                <Button onClick={onStart}>Start</Button>
                            </>
                    }
                </Card>
            </CardWrapper>
        </QuizWrapper>
    )
}

export default Quiz