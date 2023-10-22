import PageUnavailable from '../../components/common/pageUnavailable'
import GuessImageGame from '../../components/specefic/GuessImageGame/GuessImageGame'
import MatchingCardGame from '../../components/specefic/MatchingCardGame/MatchingCardGame'
import QuizGame from '../../components/specefic/QuizQuestion/QuizQuestion'
import { championsNames } from '../../consts/championsNames'
import { quizQuestions } from '../../consts/questionQuiz'
const Games = () => {
    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <GuessImageGame championsNames={championsNames} />
        </>
    )
}

export default Games