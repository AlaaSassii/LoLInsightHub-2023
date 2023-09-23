import { FC, useEffect, useState } from 'react';
import './userTitle.scss';
import CardContainer from '../../../../common/cardContainer';
type userTitleProps = {
    name: string,
    profileIconId: number
    error: string
}
const UserTitle: FC<userTitleProps> = ({ name, profileIconId, error }) => {
    const [loading, setLoading] = useState<boolean>(false);
    useEffect(() => {
        const image: HTMLImageElement = new Image();
        image.src = `http://ddragon.leagueoflegends.com/cdn/13.18.1/img/profileicon/${profileIconId}.png`;
        image.onload = () => {
            setLoading(false);
        }
    })
    return (
        <CardContainer className='' loading={loading} >
            {error
                ?
                <p>{error}</p>
                :
                <>
                    <p><b>summoner name:</b>{name}</p>
                    <img src={`http://ddragon.leagueoflegends.com/cdn/13.18.1/img/profileicon/${profileIconId}.png`} alt="" />
                </>}
        </CardContainer>
    )
}

export default UserTitle