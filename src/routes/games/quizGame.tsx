import PageContainer from '../../components/common/pageContainer'
import QuizQuestion from '../../components/specefic/QuizQuestion'
import { quizQuestions } from '../../consts/questionQuiz'
const QuizGame = () => {
    return (
        <PageContainer>
            <QuizQuestion questions={quizQuestions} />
        </PageContainer>
    )
}

export default QuizGame