import axios, { AxiosError, AxiosResponse } from 'axios';
import { FC, useState, useEffect } from 'react'
import { Api__key } from '../../../../../../../services/apiKey';
type participantProps = {
    puuid: string,
    championName: string,
    index: number

}
const Participant: FC<participantProps> = ({ championName, puuid, index }) => {
    const [userName, setUserName] = useState<string>(`user ${index}`);
    const championImage = (championName: string) => `https://opgg-static.akamaized.net/meta/images/lol/champion/${championName.toLowerCase()}.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_170&v=1695370772879`
    useEffect(() => {
        axios.get(`https://europe.api.riotgames.com/riot/account/v1/accounts/by-puuid/${puuid}?api_key=${Api__key}`)
            .then((response: AxiosResponse) => {
                setUserName(response.data.gameName)
            })
            .catch((error: AxiosError) => {
                setUserName('error')
            })
    }, [puuid])


    return (
        <div className='user'>
            <p>{userName}</p>
            <img src={championImage(championName)} alt="" />
        </div>
    )
}

export default Participant