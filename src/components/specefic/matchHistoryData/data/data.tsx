import { FC } from 'react'
import { summonerInfoType } from '../../../../types/summonerInfoType'
import Container from '../../../common/container'
import UserTitle from './userTitle'

type dataProps = summonerInfoType
const Data: FC<dataProps> = ({ id, accountId, name, profileIconId, puuid, revisionDate, summonerLevel, }) => {
    return (
        <Container className='user__data__container'>
            <UserTitle
                name={name}
                profileIconId={profileIconId}
            />
        </Container>
    )
}

export default Data