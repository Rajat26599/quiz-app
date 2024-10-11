import { useMemo } from "react";
import { Image, ResultWrapper } from "./styles";
import CelebrateImg from '../../assets/img/celebrate.jpg'
import MistakeImg from '../../assets/img/mistake.jpg'

const Result = (props) => {
    const { resultArr } = props
    const getPercentage = useMemo(() => {
        let correct = 0;
        for(let resp of resultArr) {
            if(resp) correct++
        }
        return correct*100/resultArr.length
    }, [resultArr])

    return (
        <ResultWrapper>
            <Image src={getPercentage >= 60 ? CelebrateImg : MistakeImg} alt={getPercentage >= 60 ? 'Celebration Image' : 'Sad Image'} />
            <h2 id="result-dialog">{getPercentage >= 60 ? 'Congratulations!' : 'Oops! Hard Luck.'}</h2>
            <h3> You have {getPercentage >= 60 ? 'Passed' : 'Failed'} the assessment. Your score is</h3>
            <h2>{getPercentage}%</h2>
        </ResultWrapper>
    )
}

export default Result