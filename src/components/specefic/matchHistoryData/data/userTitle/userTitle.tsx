import './userTitle.scss';
import CardContainer from '../../../../common/cardContainer';
import { FC } from 'react';
type userTitleProps = {
    name: string,
    profileIconId: number
}
const UserTitle: FC<userTitleProps> = ({ name, profileIconId }) => {
    console.log({ name })
    return (
        <CardContainer className='' loading={name === ''} >
            <p><b>summoner name:</b>{name}</p>
            <img src={`http://ddragon.leagueoflegends.com/cdn/13.18.1/img/profileicon/${profileIconId}.png`} alt="" />
        </CardContainer>
    )
}

export default UserTitle