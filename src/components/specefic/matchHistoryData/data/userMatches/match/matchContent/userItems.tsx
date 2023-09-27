import React, { FC } from 'react'
import { Participant } from '../../../../../../../types/singleMatch'

type userItemsProps = {
    user: Participant
}
const UserItems: FC<userItemsProps> = ({ user }) => {
    return (
        <div className='items__match___container'>
            <div><img src={`http://ddragon.leagueoflegends.com/cdn/13.19.1/img/item/${user.item0}.png`} /></div>
            <div><img src={`http://ddragon.leagueoflegends.com/cdn/13.19.1/img/item/${user.item1}.png`} /></div>
            <div><img src={`http://ddragon.leagueoflegends.com/cdn/13.19.1/img/item/${user.item2}.png`} /></div>
            <div><img src={`http://ddragon.leagueoflegends.com/cdn/13.19.1/img/item/${user.item3}.png`} /></div>
            <div><img src={`http://ddragon.leagueoflegends.com/cdn/13.19.1/img/item/${user.item4}.png`} /></div>
            <div><img src={`http://ddragon.leagueoflegends.com/cdn/13.19.1/img/item/${user.item5}.png`} /></div>
        </div>
    )
}

export default UserItems