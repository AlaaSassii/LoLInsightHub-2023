import { FC, useEffect, useState } from 'react'
import CardContainer from '../../../../common/cardContainer'
import axios, { AxiosError, AxiosResponse } from 'axios'
import { Api__key } from '../../../../../services/apiKey'
import { rankType } from '../../../../../types/rankType'
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
    return (
        <CardContainer className='' loading={false}>
            {(error || getRanksInfoError)
                ?
                <p>{error}</p>
                :
                <>
                    <table>

                    </table>
                </>
            }
        </CardContainer>
    )
}

export default UserRankInfo