import './userTitle.scss';
import CardContainer from '../../../../common/cardContainer';
import { FC } from 'react';
type userTitleProps = {
    name: string,
    profileIcon: number
}
const UserTitle: FC<userTitleProps> = ({ name, profileIcon }) => {
    return (
        <CardContainer className='' loading={name === ''} >
            <p><b>summoner name:</b>{name}</p>
            <img src={`http://ddragon.leagueoflegends.com/cdn/13.18.1/img/profileicon/${profileIcon}.png`} alt="" />
        </CardContainer>
    )
}

export default UserTitle