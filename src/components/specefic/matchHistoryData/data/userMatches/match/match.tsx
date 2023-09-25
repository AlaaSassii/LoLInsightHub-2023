import axios, { AxiosError, AxiosResponse } from "axios";
import { FC, useEffect, useState } from "react"
import { Api__key } from "../../../../../../services/apiKey";
import MatchHeader from "./matchHeader";
import MatchContent from "./matchContent";
import MatchFooter from "./matchFooter";
import { singleMatch, Participant } from "../../../../../../types/singleMatch";
import './match.scss';
type matchProps = {
    matchId: string,
    puuid: string
}
const Match: FC<matchProps> = ({ matchId, puuid }) => {
    const [match, setMatch] = useState<singleMatch | null>(null);
    const [user, setUser] = useState<Participant | null>(null);
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
    if (matchError) return null
    if (matchLoading) return <h1>Loading..</h1>
    return (
        <div className={`single__match ${user?.win ? 'win__match' : 'lost__match'}`}>
            {
                (match !== null && user !== null) ?
                    <>
                        <MatchHeader
                            gameMode={match.info.gameMode}
                            gameCreation={match.info.gameCreation}
                            gameDuration={match.info.gameDuration}
                            gameVersion={match.info.gameVersion}
                        />
                        <MatchContent
                            info={match.info}
                            metadata={match.metadata}
                            puuid={puuid}
                        />
                        <MatchFooter
                            user={user}
                        />
                    </>
                    :
                    null
            }
        </div>
    )
}

export default Match