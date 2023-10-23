import { FC } from 'react'
import { Participant } from '../../../../../../../types/singleMatch'
import ItemImage from './itemImage'

type userItemsProps = {
    user: Participant
}
const UserItems: FC<userItemsProps> = ({ user: { item0, item1, item2, item3, item4, item5 } }) => {

    return (
        <div className='items__match___container'>
            {
                [item0, item1, item2, item3, item4, item5]
                    .map((number, index) => <ItemImage key={`item__image__${index}`} image={`http://ddragon.leagueoflegends.com/cdn/13.19.1/img/item/${number}.png`} />)

            }
        </div>
    )
}

export default UserItems