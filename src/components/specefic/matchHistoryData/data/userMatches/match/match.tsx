import axios, { AxiosError, AxiosResponse } from "axios";
import { FC, useEffect, useState } from "react"
import { Api__key } from "../../../../../../services/apiKey";
import MatchHeader from "./matchHeader";
import MatchContent from "./matchContent";
import MatchFooter from "./matchFooter";
import { Info, Metadata, singleMatch } from "../../../../../../types/singleMatch";
import { info } from "../../../../../../types/championDataType";

type matchProps = {
    matchId: string,
    puuid: string
}
const Match: FC<matchProps> = ({ matchId, puuid }) => {
    const [match, setMatch] = useState<singleMatch | null>(null);
    const [user, setUser] = useState<any>({});
    const [matchLoading, setMatchLoading] = useState<boolean>(false);
    const [matchError, setMatchError] = useState<boolean>(false);
    useEffect(() => {
        setMatchLoading(true)
        axios.get(`https://europe.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${Api__key}`)
            .then((response: AxiosResponse) => {
                setMatch(response.data);
                setUser(response.data.info.participants.find((participant: unknown & { puuid: string }) => participant.puuid === puuid))
                setMatchLoading(false);
            })
            .catch((error: AxiosError) => {
                setMatchError(true);
                setMatchLoading(false)
            })
    }, [])
    if (matchError) return <p>Something Went Wrong While Getting The Data.</p>
    if (matchLoading) return <h1>Loading..</h1>
    return (
        <div className="match__card" >
            <MatchHeader
                gameMode={match?.info?.gameMode as string}
                gameCreation={match?.info.gameCreation as number}
                gameDuration={match?.info?.gameDuration as number}
                gameVersion={match?.info?.gameVersion as string}
            />
            <MatchContent
                info={match?.info as Info}
                metadata={match?.metadata as Metadata}
                puuid={puuid}
            />
            <MatchFooter
                user={user}
            />
        </div>
    )
}

export default Match