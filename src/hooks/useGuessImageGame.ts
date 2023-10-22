import { useState, useEffect } from 'react'
export const useGuessImageGame = (championsNames: string[]) => {
    const [names, setNames] = useState<string[]>([]);
    const [choosedName, setChooseName] = useState('');
    const [score, setScore] = useState(0);
    const [stopGame, setStopGame] = useState(false);
    const [alertMessage, setAlertMessage] = useState<{ message: string, error: boolean, show: boolean }>({ error: false, message: '', show: false })
    const gameStart = () => {
        const randomChampionIndex = Math.floor(Math.random() * (164));
        setChooseName(championsNames[randomChampionIndex]);
        setNames([championsNames[randomChampionIndex], championsNames[Math.floor(Math.random() * (164))], championsNames[Math.floor(Math.random() * (164))]].sort(() => 0.5 - Math.random()));
    }

    const handleAnswerClicked = (userAnswer: string) => {
        if (userAnswer === choosedName) {
            setScore(score => score + 1);
            showAlert('bravo', false);
            gameStart();
        } else {
            showAlert('faild', false);
            gameStart();
        }
    }

    const showAlert = (message: string, error: boolean) => {
        setAlertMessage({ message, error, show: true })
        setTimeout(() => {
            setAlertMessage({ ...alertMessage, show: false })
        }, 1500)
    }

    const repeatGame = () => {
        setScore(0);
        setAlertMessage({ ...alertMessage, show: false })
        gameStart();
    }
    useEffect(() => {
        gameStart()
    }, []);

    return { names, score, stopGame, setStopGame, alertMessage, handleAnswerClicked, choosedName, repeatGame }
}