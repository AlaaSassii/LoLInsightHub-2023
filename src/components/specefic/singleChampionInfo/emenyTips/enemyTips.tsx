import React, { FC } from 'react'
import CardContainer from '../../../common/cardContainer'

type enemytipsProps = {
    enemytips: string[]
}
const EnemyTips: FC<enemytipsProps> = ({ enemytips }) => {
    return (
        <CardContainer loading={false} className='enemy__tips'>
            <ul>
                {
                    enemytips.map((tip, index) => <li key={`enemy__tip__${index}`}>{tip}</li>)
                }
            </ul>
        </CardContainer>
    )
}

export default EnemyTips