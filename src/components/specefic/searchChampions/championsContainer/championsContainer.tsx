import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { championsDataType } from '../../../../types/championsDataType'
import { championSquareImage } from '../../../../helpers/championSquareImage'

export type championContainerType = {
    data: championsDataType
}

const ChampionsContainer: FC<championContainerType> = ({ data }) => {
    let navigate = useNavigate();
    const { data: champions } = data;
    return (
        <div className='champions__container'>
            {Object.keys(champions)
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