import axios, { AxiosResponse } from 'axios';
import { FC, useState, useEffect } from 'react'
import { Api__key } from '../../../../../../../services/apiKey';
type participantProps = {
    puuid: string,
    championName: string,
    user: any
}
const Participant: FC<participantProps> = ({ championName, puuid, user }) => {
    const [userName, setUserName] = useState<string>('');

    useEffect(() => {
        axios.get(`https://europe.api.riotgames.com/riot/account/v1/accounts/by-puuid/${puuid}?api_key=${Api__key}`)
            .then((response: AxiosResponse) => {
                setUserName(response.data.gameName)
            })
    }, [puuid])


    return (
        <div>

        </div>
    )
}

export default Participant