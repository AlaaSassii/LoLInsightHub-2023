import React, { useState } from 'react';
import { quizQuestions } from '../../../types/quizQuestions';


type QuizProps = {
    questions: quizQuestions;
}

const QuizGame: React.FC<QuizProps> = ({ questions }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState<string[]>(Array(questions.length).fill(''));
    const [score, setScore] = useState(0);

    const handleAnswer = (selectedAnswer: string) => {
        const isCorrect = selectedAnswer === questions[currentQuestion].trueAnswer;
        setUserAnswers((prevAnswers) => {
            prevAnswers[currentQuestion] = selectedAnswer;
            return [...prevAnswers];
        });

        if (isCorrect) {
            setScore(score + 1);
        }
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    return (
        <div>
            {currentQuestion < questions.length - 1 ? (
                <div>
                    <h2>Question {currentQuestion + 1}</h2>
                    <p>{questions[currentQuestion].quizQuestion}</p>
                    {questions[currentQuestion].questions.map((answer, index) => (
                        <button key={index} onClick={() => handleAnswer(answer)}>
                            {answer}
                        </button>
                    ))}

                </div>
            ) : (
                <div>
                    <h2>Quiz Completed!</h2>
                    <p>Your Score: {score} out of {questions.length}</p>
                    <div>
                        <h3>Answers:</h3>
                        <ul>
                            {questions.map((question, index) => (
                                <li key={index}>
                                    {question.quizQuestion} - Your Answer: {userAnswers[index]}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default QuizGame;
