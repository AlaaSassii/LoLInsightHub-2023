import './userTitle.scss';
import CardContainer from '../../../../common/cardContainer';
import { FC, useEffect, useState } from 'react';
type userTitleProps = {
    name: string,
    profileIconId: number
}
const UserTitle: FC<userTitleProps> = ({ name, profileIconId }) => {
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
            <p><b>summoner name:</b>{name}</p>
            <img src={`http://ddragon.leagueoflegends.com/cdn/13.18.1/img/profileicon/${profileIconId}.png`} alt="" />
        </CardContainer>
    )
}

export default UserTitle