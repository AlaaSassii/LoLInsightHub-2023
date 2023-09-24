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
        <div>
            <UserChampion
                championName={user?.championName as string}
                lane={user?.lane as string}
                level={user?.champLevel as number}
            />
            <div>
                <p><b>{user?.kills as number}/<b>{user?.deaths as number}</b>/<b>{user?.assists as number}</b></b></p>
            </div>
            <Participants
                participants={info?.participants}
                user={user}

            />
        </div>
    )
}

export default MatchContent