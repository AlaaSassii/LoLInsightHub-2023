import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { championsDataType } from '../../../../types/championsDataType'
import { championSquareImage, } from '../../../../helpers/championSquareImage'

export type championContainerType = {
    data: championsDataType,
    championName: string,
}

const ChampionsContainer: FC<championContainerType> = ({ data, championName }) => {

    let navigate = useNavigate();
    const { data: champions } = data;
    return (
        <div className='champions__container'>
            {Object.keys(champions)
                .filter(name => name.toLowerCase().includes(championName.toLowerCase()))
                .map((name, index) => {
                    return <div key={`champion__${index}`}>
                        <img src={championSquareImage(name)} alt={`${name} image`} />
                        <b>{name}</b>
                    </div>
                })}
        </div>
    )
}
export default ChampionsContainer