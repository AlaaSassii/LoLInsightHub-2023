import { FC, useEffect, useState } from 'react'
import CardContainer from '../../../../common/cardContainer'
import axios, { AxiosError, AxiosResponse } from 'axios'
import { Api__key } from '../../../../../services/apiKey'
import { rankType } from '../../../../../types/rankType'
import './userRankInfo.scss'
type userRankInfoProps = {
    summonerId: string
    error: string
}
const UserRankInfo: FC<userRankInfoProps> = ({ summonerId, error }) => {
    const [rankInfo, setRankInfo] = useState<rankType>([]);
    const [getRanksInfoError, setRanksInfoError] = useState<boolean>(false);
    useEffect(() => {
        axios.get(`https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}?api_key=${Api__key}`)
            .then((response: AxiosResponse) => {
                setRankInfo(response.data)
                console.log('responsee', response.data);

            })
            .catch((error: AxiosError) => {
                setRanksInfoError(true)
            })
    }, [])
    if (rankInfo.length === 0) return null
    return (
        <CardContainer className='' loading={false}>
            <table>
                <thead>
                    <tr>
                        <th>Solo/Duo Rank </th>
                        <th>Flex Rank</th>
                        <th>Win Rate</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{rankInfo[0].tier}</td>
                        <td>{rankInfo[1]?.tier}</td>
                        <td>{((rankInfo[0].wins - rankInfo[0].losses + rankInfo?.[1].wins + rankInfo?.[1].losses) / (rankInfo[0].wins + rankInfo[0].losses + rankInfo?.[1].wins + rankInfo?.[1].losses) * 100).toFixed(2)}%</td>
                    </tr>
                </tbody>
            </table>
        </CardContainer>
    )
}

export default UserRankInfo