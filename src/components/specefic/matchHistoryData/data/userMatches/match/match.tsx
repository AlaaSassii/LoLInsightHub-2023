import axios, { AxiosError, AxiosResponse } from "axios";
import { FC, useEffect, useState } from "react"
import { Api__key } from "../../../../../../services/apiKey";

type matchProps = {
    matchId: string,
}
const Match: FC<matchProps> = ({ matchId }) => {
    const [match, setMatch] = useState<Object>({});
    const [matchLoading, setMatchLoading] = useState<boolean>(false);
    const [matchError, setMatchError] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    useEffect(() => {
        axios.get(`https://europe.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${Api__key}`)
            .then((response: AxiosResponse) => {
                setMatch(response.data)
            })
            .catch((error: AxiosError) => {
                setMatchError(true)
            })
    }, [])
    return (
        null
    )
}

export default Match