import { FC, useState } from 'react'
import { useGuessImageGame } from '../../../hooks/useGuessImageGame'

type GuessImageGameType = {
    championsNames: string[]
}
const GuessImageGame: FC<GuessImageGameType> = ({ championsNames }) => {
    const { alertMessage, handleAnswerClicked, names, score, setStopGame, stopGame } = useGuessImageGame(championsNames)
    return (
        <div>
            {
                stopGame
                    ?
                    <div className='stop_game'>

                    </div>
                    :
                    <div>

                    </div>
            }
        </div>
    )
}

export default GuessImageGame