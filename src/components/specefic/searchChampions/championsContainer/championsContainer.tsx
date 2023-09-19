import { FC } from 'react'
import { championsDataType } from '../../../../types/championsDataType'

export type championContainerType = {
    data: championsDataType
}

const ChampionsContainer: FC<championContainerType> = ({ data }) => {
    const { data: champions } = data;
    return (
        <>
            {Object.keys(champions)
                .map((name, index) => {
                    return <div key={index}>{name}</div>
                })}
        </>
    )
}
export default ChampionsContainer