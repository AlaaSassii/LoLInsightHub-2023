import PageUnavailable from '../../components/common/pageUnavailable'
import MatchingCardGame from '../../components/specefic/MatchingCardGame/MatchingCardGame'
import QuizGame from '../../components/specefic/QuizQuestion/QuizQuestion'
import { quizQuestions } from '../../consts/questionQuiz'
const Games = () => {
    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <QuizGame questions={quizQuestions} />
        </>
    )
}

export default Games