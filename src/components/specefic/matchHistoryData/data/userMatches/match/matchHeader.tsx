import { FC } from 'react'
import { formatTimestamp, formatUnixTimestamp } from '../../../../../../helpers/timeToString'

type matchHeaderProps = {
    gameMode: string,
    gameCreation: number,
    gameDuration: number,
    gameVersion: string
}
const MatchHeader: FC<matchHeaderProps> = ({ gameMode, gameCreation, gameDuration, gameVersion }) => {
    return (
        <div className='match__header'>
            <div>{gameMode}</div>
            <div>{formatUnixTimestamp(gameCreation)}</div>
            <div>{formatTimestamp(gameDuration)}</div>
            <div>{gameVersion}</div>
        </div>
    )
}

export default MatchHeader