import { FC } from 'react'
import { summonerInfoType } from '../../../../types/summonerInfoType'
import Container from '../../../common/container'

type dataProps = summonerInfoType
const Data: FC<dataProps> = ({ }) => {
    return (
        <Container className='user__data__container'>

        </Container>
    )
}

export default Data