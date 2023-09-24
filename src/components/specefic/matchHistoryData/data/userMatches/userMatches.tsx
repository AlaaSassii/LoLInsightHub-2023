import axios, { AxiosResponse, AxiosError } from "axios";
import { FC, useEffect, useState } from "react"
import { Api__key } from "../../../../../services/apiKey";
import CardContainer from "../../../../common/cardContainer";
import Match from "./match";
type userMatchesProps = {
    puuid: string,
    error: string
}
const UserMatches: FC<userMatchesProps> = ({ puuid, error }) => {
    const [matchesId, setMatchesId] = useState<string[]>([]);
    const [matchesLoading, setMatchesLoading] = useState<boolean>(false)
    const [getUserMatchesError, setUserMatchesError] = useState<boolean>(false);
    useEffect(() => {
        setMatchesLoading(true)
        axios(`https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=20&api_key=${Api__key}`)
            .then((response: AxiosResponse) => {
                setMatchesId(response.data);
                setMatchesLoading(false)
            })
            .catch((error: AxiosError) => {
                setUserMatchesError(false)
            })
    }, [])
    return (
        <CardContainer className='' loading={matchesLoading} >
            {(error || getUserMatchesError)
                ?
                <p>{error}</p>
                :
                <>
                    {
                        matchesId.map((matchId, index) => {
                            <Match
                                matchId={matchId}
                                key={`match__history__${index}`}
                            />
                        })
                    }
                </>}
        </CardContainer>
    )
}

export default UserMatches