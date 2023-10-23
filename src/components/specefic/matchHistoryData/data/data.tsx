import { FC } from 'react'
import { summonerInfoType } from '../../../../types/summonerInfoType'
import Container from '../../../common/container'
import UserTitle from './userTitle'
import UserChampions from './userChampions'
import UserRankInfo from './userRankInfo'
import UserMatches from './userMatches'

type dataProps = summonerInfoType & {
    error: string
}
const Data: FC<dataProps> = ({ id: summonerId, name, profileIconId, puuid, error }) => {
    return (
        <Container className='user__data__container'>
            <UserTitle
                name={name}
                profileIconId={profileIconId}
                error={error}
            />
            <UserRankInfo
                summonerId={summonerId}
                error={error}

            />
            <UserChampions
                puuid={puuid}
                error={error}
            />
            <UserMatches
                puuid={puuid}
                error={error}
            />

        </Container>
    )
}

export default Data