import { FC, useEffect, useState } from "react"
import CardContainer from "../../../../common/cardContainer"
import axios, { AxiosError, AxiosResponse } from "axios"
import { Api__key } from "../../../../../services/apiKey"
import { ChampionInfo } from "../../../../../types/championInfoTypes"
type userChampionsProps = {
    puuid: string,
    error: string
}
const UserChampions: FC<userChampionsProps> = ({ puuid, error }) => {
    const [getChampionsError, setChampionsError] = useState<boolean>(false);
    const [champions, setChampions] = useState<ChampionInfo[]>([])
    useEffect(() => {
        axios.get(`https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/${puuid}/top?count=7&api_key=${Api__key}`)
            .then((response: AxiosResponse) => {
                setChampions(response.data)
            })
            .catch((error: AxiosError) => {
                setChampionsError(true)
                console.log(error.message)
            })
    }, [])
    return (
        <CardContainer loading={false} className="">
            {
                (error || getChampionsError)
                    ?
                    <p>{error}</p>
                    :
                    <>
                        <table>
                            <thead>
                                <tr>
                                    <th>Champion ID</th>
                                    <th>Champion Level</th>
                                    <th>Champion Points</th>
                                    <th>Points Since Last Level</th>
                                    <th>Points Until Next Level</th>
                                    <th>Chest Granted</th>
                                    <th>Last Play Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {champions.map((championInfo, index) => (
                                    <tr key={index}>
                                        <td>{championInfo.championId}</td>
                                        <td>{championInfo.championLevel}</td>
                                        <td>{championInfo.championPoints}</td>
                                        <td>{championInfo.championPointsSinceLastLevel}</td>
                                        <td>{championInfo.championPointsUntilNextLevel}</td>
                                        <td>{championInfo.chestGranted ? 'Yes' : 'No'}</td>
                                        <td>{new Date(championInfo.lastPlayTime).toLocaleString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </>
            }
        </CardContainer>
    )
}

export default UserChampions

// https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/SYuNnCw0KilGQOlFeLyZKFDQFxd96xM6XUdSloTRq_g1eS1EDnFmvPlrhW5WMGJbj_6C8zjWBwcKcw/top?count=10&api_key=RGAPI-e519a871-aa7b-4805-a2ce-2f79015c8bba

