import { FC } from 'react'
import { Info, Metadata, Participant } from "../../../../../../../types/singleMatch"
import UserChampion from './userChampion'
import Participants from './participants'
import UserItems from './userItems'

type matchContentProps = {
    info: Info,
    metadata: Metadata
    puuid: string
}
const MatchContent: FC<matchContentProps> = ({ info, puuid, }) => {
    const user = info?.participants?.find((participant: Participant) => participant.puuid === puuid) as Participant

    return (
        <div className='match__content'>
            <UserChampion
                championName={user.championName}
                lane={user.lane.toLocaleLowerCase()}
                level={user.champLevel}
            />
            <div>
                <p><b>{user.kills}/<b className='b__user__death'>{user.deaths}</b>/<b>{user.assists}</b></b></p>
            </div>
            <UserItems
                user={user}
            />
            <Participants
                participants={info.participants}
                user={user}

            />
        </div>
    )
}

export default MatchContent