import React, { useState } from 'react';
import { quizQuestions } from '../../../types/quizQuestions';
import './QuizQuestion.scss'

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
        setCurrentQuestion(currentQuestion + 1);
    };

    return (
        <div>
            {currentQuestion < questions.length ? (
                <div className='quiz__questions'>
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

                    <table>
                        <thead>
                            <tr>
                                <th>Question Number</th>
                                <th>Question</th>
                                <th>Your Answer</th>
                                <th>True Answer</th>
                            </tr>
                        </thead>
                        <tbody>
                            {questions.map((question, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{question.quizQuestion}</td>
                                    <td>{userAnswers[index]}</td>
                                    <td>{question.trueAnswer}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default QuizGame;
