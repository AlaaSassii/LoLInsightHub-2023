import { FC } from 'react'
import { useGuessImageGame } from '../../../hooks/useGuessImageGame'
import './GuessImageGame.scss'
type GuessImageGameType = {
    championsNames: string[]
}
const GuessImageGame: FC<GuessImageGameType> = ({ championsNames }) => {
    const { alertMessage, handleAnswerClicked, names, score, setStopGame, stopGame, choosedName, repeatGame } = useGuessImageGame(championsNames)
    return (
        <div className='guess__image__game'>
            {
                stopGame
                    ?
                    <div className='stop__game'>
                        <h2>Score:{score}</h2>
                        <button onClick={() => { repeatGame() }}>repeat game</button>
                    </div>
                    :
                    <div className='game'>
                        <div className="image"><img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${choosedName}_${0}.jpg`} /></div>
                        <div className="choosed__btn">
                            {
                                names.map((name) => <button key={name} onClick={() => handleAnswerClicked(name)}>{name}</button>)
                            }
                        </div>
                        <button className='stop__game__btn' onClick={() => setStopGame(true)}>Stop</button>
                        <button className='stop__game__btn' onClick={() => setStopGame(true)}>Stop</button>
                    </div>
            }
            {
                <div className={`alert__message in__top ${alertMessage.show && 'alert__message__show'} ${alertMessage.error ? 'alert__error' : 'alert__succ'}`}>{alertMessage.message}</div>
            }
        </div>
    )
}

export default GuessImageGame