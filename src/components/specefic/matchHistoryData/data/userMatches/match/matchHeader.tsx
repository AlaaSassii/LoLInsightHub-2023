import { FC } from 'react'

type matchHeaderProps = {
    gameMode: string,
    gameCreation: Date,
    gameDuration: number,
    gameVersion: string
}
const MatchHeader: FC<matchHeaderProps> = ({ gameMode, gameCreation, gameDuration, gameVersion }) => {
    return (
        <div className='match__header'>
            <div>{gameMode}</div>
            <div>{gameCreation}</div>
            <div>{gameDuration}</div>
            <div>{gameVersion}</div>
        </div>
    )
}

export default MatchHeader