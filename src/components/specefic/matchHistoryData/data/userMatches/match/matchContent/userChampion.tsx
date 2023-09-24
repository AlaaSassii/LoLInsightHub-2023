import { FC } from 'react'
type userChampionProps = {
    lane: string,
    level: number,
    championName: string
}
const userChampion: FC<userChampionProps> = ({ lane, level, championName }) => {
    const championImage = (championName: string) => `https://opgg-static.akamaized.net/meta/images/lol/champion/${championName.toLowerCase()}.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_170&v=1695370772879`
    const roleImage = (role: string) => `https://s-lol-web.op.gg/images/icon/icon-position-${role}.svg?v=1695370772879`
    return (
        <div className='user__match__champion'>
            <div className='image'>
                <img src={championImage(championName)} />
            </div>
            <div className='champion__data'>
                <div className='circle'>
                    <img src={roleImage(lane)} />
                </div>
                <div className='circle'>
                    {level}
                </div>
            </div>
        </div>
    )
}

export default userChampion