import { useState } from "react";
import { modeGame } from "../enums/modeGame"

export const useGuessItemName = (items: string[]) => {
    const [gameMode, setGameMode] = useState<modeGame>(modeGame.easy);
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [correctItem, setCorrectItem] = useState('')
    const [score, setScore] = useState(0)


    const play = () => {
        if (gameMode === modeGame.easy) {
            playEayMode();
        } else {
            defaultPlay()
        }
    }

    const playEayMode = () => {
        const correctItem = items[Math.floor(Math.random() * 200)];
        setCorrectItem(correctItem)
        setSuggestions([correctItem, items[Math.floor(Math.random() * 200)], items[Math.floor(Math.random() * 200)]].sort(() => 0.5 - Math.random()))
    }
    const defaultPlay = () => {
        const correctItem = items[Math.floor(Math.random() * 200)];
        setCorrectItem(correctItem)
    }

    const changeGameMode = (gameModeArg: modeGame) => {
        setGameMode(gameModeArg)
    }

    const repeat = () => {
        setScore(0);
        play()
    }

    const handleAnswerClicked = (answer: string) => {
        if (answer === correctItem) {
            setScore(score + 1);
        }
        play()
    }

    return { gameMode, suggestions, correctItem, score, playEayMode, defaultPlay, changeGameMode, handleAnswerClicked, repeat }
}
