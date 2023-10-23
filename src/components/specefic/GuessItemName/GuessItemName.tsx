import { FC } from 'react'
import { useGuessItemName } from '../../../hooks/useGuessItemName'
import { modeGame } from '../../../enums/modeGame'
import { replaceRandomLetters } from '../../../helpers/replaceRandomLetter'
import './GuessItemName.scss'
type itemString = {
    items: string[],
    itemsId: string[],
}
const GuessItemName: FC<itemString> = ({ items, itemsId }) => {
    const { changeGameMode, correctItem, gameMode, handleAnswerClicked, repeat, score, correctItemId, suggestions, handleClickButton, inputRef, endGame, stop } = useGuessItemName(items, itemsId);

    return (
        <div className='guess__item__name'>
            {
                !stop
                    ?
                    <>
                        <div className="categories">
                            <button onClick={() => { changeGameMode(modeGame.easy) }}>Easy</button>
                            <button onClick={() => { changeGameMode(modeGame.medium) }}>Medium</button>
                            <button onClick={() => { changeGameMode(modeGame.hard) }}>Hard</button>
                        </div>
                        <img src={`https://ddragon.leagueoflegends.com/cdn/13.20.1/img/item/${correctItemId}.png`} alt="" />
                        {
                            gameMode === modeGame.easy
                                ?
                                suggestions.map(suggestion => <button onClick={() => handleAnswerClicked(suggestion)}>{suggestion}</button>)
                                :
                                <>
                                    {gameMode === modeGame.medium && <p>{replaceRandomLetters(correctItem)}</p>}
                                    <input type="text" placeholder='search item' ref={inputRef} />
                                    <button onClick={handleClickButton}>submit</button>
                                </>
                        }


                    </>
                    :
                    <p><b>your score is:</b>{score}</p>
            }

            <div className='game__buttons__'>
                <button onClick={repeat}>Repeat</button>
                <button onClick={endGame}>get score</button>
            </div>
        </div>
    )
}

export default GuessItemName