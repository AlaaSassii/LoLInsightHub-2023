import { FC } from 'react'
import { useGuessImageGame } from '../../../hooks/useGuessImageGame'
import { useGuessItemName } from '../../../hooks/useGuessItemName'
import { modeGame } from '../../../enums/modeGame'
import { replaceRandomLetters } from '../../../helpers/replaceRandomLetter'

type itemString = {
    items: string[],
    itemsId: string[],
}
const GuessItemName: FC<itemString> = ({ items, itemsId }) => {
    const { changeGameMode, correctItem, defaultPlay, gameMode, handleAnswerClicked, playEayMode, repeat, score, correctItemId, suggestions, handleClickButton, inputRef, endGame, stop } = useGuessItemName(items, itemsId);

    return (
        <div className='guess__item__name'>
            {
                !stop
                    ?
                    <>
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

                        <div className="categories">
                            <button onClick={() => { changeGameMode(modeGame.easy) }}>Easy</button>
                            <button onClick={() => { changeGameMode(modeGame.medium) }}>Medium</button>
                            <button onClick={() => { changeGameMode(modeGame.hard) }}>Hard</button>
                        </div>
                    </>
                    :
                    <p><b>your score is:</b>{score}</p>
            }

            <button onClick={repeat}>Repeat</button>
            <button onClick={endGame}>get score</button>
        </div>
    )
}

export default GuessItemName