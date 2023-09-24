import { FC } from 'react'
import { formatTimestamp, formatUnixTimestamp } from '../../../../../../helpers/timeToString'

type matchHeaderProps = {
    gameMode: string,
    gameCreation: number,
    gameDuration: number,
    gameVersion: string
}
const MatchHeader: FC<matchHeaderProps> = ({ gameMode, gameCreation, gameDuration, gameVersion }) => {
    const gameCreatedTime = formatUnixTimestamp(gameCreation as number);
    const gameDurationTime = formatTimestamp(gameDuration)
    return (
        <div className='match__header'>
            <div><b>Game Mode: </b>{gameMode}</div>
            <div><b>Game Created on: </b>{gameCreatedTime}</div>
            <div><b>Game Duration: </b>{gameDurationTime}</div>
            <div><b>Version: </b>{gameVersion}</div>
        </div>
    )
}

export default MatchHeader