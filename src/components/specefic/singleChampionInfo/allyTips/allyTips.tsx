import { FC } from 'react'
import CardContainer from '../../../common/cardContainer'
type allyTipsProps = {
    allytips: string[]
}
const allyTips: FC<allyTipsProps> = ({ allytips }) => {
    return (
        <CardContainer loading={false}>
            <ul>
                {
                    allytips.map((tip, index) => <li key={`ally__tip__${index}`}>{tip}</li>)
                }
            </ul>
        </CardContainer>
    )
}

export default allyTips