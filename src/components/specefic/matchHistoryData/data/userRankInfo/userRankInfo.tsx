import { FC, useEffect } from 'react'
import CardContainer from '../../../../common/cardContainer'
import axios, { AxiosError, AxiosResponse } from 'axios'
import { Api__key } from '../../../../../services/apiKey'
type userRankInfoProps = {
    summonerId: string
    error: string
}
const UserRankInfo: FC<userRankInfoProps> = ({ summonerId, error }) => {

    useEffect(() => {
        axios.get(`https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}?api_key=${Api__key}`)
            .then((response: AxiosResponse) => {

            })
            .catch((error: AxiosError) => {

            })
    }, [])
    return (
        <CardContainer className='' loading={false}>

        </CardContainer>
    )
}

export default UserRankInfo