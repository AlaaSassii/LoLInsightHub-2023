import { FC } from 'react'
import { Info, Metadata, Participant } from "../../../../../../../types/singleMatch"
import UserChampions from '../../../userChampions'
import UserChampion from './userChampion'
import Participants from './participants'

type matchContentProps = {
    info: Info,
    metadata: Metadata
    puuid: string
}
const MatchContent: FC<matchContentProps> = ({ info, metadata, puuid }) => {
    const user = info?.participants?.find((participant: Participant) => participant.puuid === puuid) as Participant

    return (
        <div className='match__content'>
            <UserChampion
                championName={user.championName}
                lane={user.lane.toLocaleLowerCase()}
                level={user.champLevel}
            />
            <div>
                <p><b>{user.kills}/<b>{user.deaths}</b>/<b>{user.assists}</b></b></p>
            </div>
            <Participants
                participants={info.participants}
                user={user}

            />
        </div>
    )
}

export default MatchContent