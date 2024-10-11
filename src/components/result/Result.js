const Result = (props) => {
    const { resultArr } = props
    const getPercentage = () => {
        let correct = 0;
        for(let resp of resultArr) {
            if(resp) correct++
        }
        return correct*100/resultArr.length
    }
    return (
        <>
            <h3>Your score is</h3>
            <h2>{getPercentage()}%</h2>
        </>
    )
}

export default Result