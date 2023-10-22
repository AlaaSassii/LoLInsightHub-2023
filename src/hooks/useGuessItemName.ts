import { useState, useEffect, useRef } from "react";
import { modeGame } from "../enums/modeGame"

export const useGuessItemName = (items: string[], itemsId: string[]) => {
    const [gameMode, setGameMode] = useState<modeGame>(modeGame.easy);
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [correctItem, setCorrectItem] = useState('');
    const [correctItemId, setCorrectItemId] = useState('');
    const [score, setScore] = useState(0)
    const inputRef = useRef<HTMLInputElement | null>(null)

    const play = () => {
        if (gameMode === modeGame.easy) {
            playEayMode();
        } else {
            defaultPlay()
        }
    }
    const generateRandomItem = () => {
        const randomIndex = Math.floor(Math.random() * 200)
        setCorrectItem(items[randomIndex]);
        setCorrectItemId(itemsId[randomIndex]);
        return items[randomIndex];
    }
    const playEayMode = () => {
        const correctItem = generateRandomItem()

        setSuggestions([correctItem, items[Math.floor(Math.random() * 200)], items[Math.floor(Math.random() * 200)]].sort(() => 0.5 - Math.random()))
    }
    const defaultPlay = () => {
        const correctItem = generateRandomItem()
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
    const handleClickButton = () => {
        if (inputRef?.current) {
            if (inputRef.current.value === '') {
                alert("Please fill the input")
            } else {
                handleAnswerClicked(inputRef.current.value)
            }
        }
    }
    useEffect(() => {
        playEayMode()
    }, [])

    return { gameMode, suggestions, correctItem, score, playEayMode, defaultPlay, changeGameMode, repeat, handleAnswerClicked, correctItemId, handleClickButton, inputRef }
}
