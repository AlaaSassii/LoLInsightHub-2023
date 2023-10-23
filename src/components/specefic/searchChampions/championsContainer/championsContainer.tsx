import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { championsDataType } from '../../../../types/championsDataType'
import { championSquareImage, } from '../../../../helpers/championSquareImage'

export type championContainerType = {
    data: championsDataType,
    championName: string,
}

const ChampionsContainer: FC<championContainerType> = ({ data, championName }) => {

    let navigate = useNavigate();
    const handleClick = (name: string) => {
        navigate(`${name}`)
    }
    const { data: champions } = data;
    const championsData = Object.keys(champions).filter(name => name.toLowerCase().includes(championName.toLowerCase()));
    return (
        <div className='champions__container'>
            {championsData.length === 0 ?
                <div className='champions__container__empty'>
                    <h1>No Champions Found</h1>
                </div> :
                championsData
                    .map((name, index) => {
                        return <div key={`champion__${index}`} onClick={() => handleClick(name)}>
                            <img src={championSquareImage(name)} alt={`${name} image`} />
                            <b>{name}</b>
                        </div>
                    })}
        </div>
    )
}
export default ChampionsContainer