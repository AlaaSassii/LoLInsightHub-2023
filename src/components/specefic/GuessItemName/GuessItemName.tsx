import { FC } from 'react'
import { useGuessImageGame } from '../../../hooks/useGuessImageGame'
import { useGuessItemName } from '../../../hooks/useGuessItemName'

type itemString = {
    items: string[],
    itemsId: string[]
}
const GuessItemName: FC<itemString> = ({ items, itemsId }) => {
    const { changeGameMode, correctItem, defaultPlay, gameMode, handleAnswerClicked, playEayMode, repeat, score, correctItemId, suggestions } = useGuessItemName(items, itemsId);

    return (
        <div className='guess__item__name'>
            <img src={`https://ddragon.leagueoflegends.com/cdn/13.20.1/img/item/${correctItemId}.png`} alt="" />
        </div>
    )
}

export default GuessItemName