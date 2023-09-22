import { FC } from 'react'
import CardContainer from '../../../common/cardContainer'
import { formatArrayToSentence } from '../../../../helpers'
type championTypeProps = {
    tags: string[]
}
const championType: FC<championTypeProps> = ({ tags }) => {
    return (
        <CardContainer loading={false}>
            <h2>{formatArrayToSentence(tags)}</h2>
        </CardContainer>
    )
}

export default championType