import { FC } from 'react'
import { summonerInfoType } from '../../../../types/summonerInfoType'
import Container from '../../../common/container'
import UserTitle from './userTitle'
import UserChampions from './userChampions'
import UserRankInfo from './userRankInfo'

type dataProps = summonerInfoType & {
    error: string
}
const Data: FC<dataProps> = ({ id: summonerId, accountId, name, profileIconId, puuid, revisionDate, summonerLevel, error }) => {
    return (
        <Container className='user__data__container'>
            <UserTitle
                name={name}
                profileIconId={profileIconId}
                error={error}
            />
            <UserRankInfo
                summonerId={summonerId}
            />
            <UserChampions
                puuid={puuid}
                error={error}
            />
        </Container>
    )
}

export default Data