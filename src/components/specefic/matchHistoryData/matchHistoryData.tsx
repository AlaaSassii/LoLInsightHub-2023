import { ChangeEvent, useState } from 'react'
import SearchInput from '../../common/searchInput'
import { Api__key } from '../../../services/apiKey';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { summonerInfoType } from '../../../types/summonerInfoType';
import { summonerInfoInitialState } from '../../../consts/summonerInfo';
const matchHistory = () => {
    const [summonerName, setSummonerName] = useState<string>('');
    const [summonerInfo, setSummonerInfo] = useState<summonerInfoType>(summonerInfoInitialState);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSummonerName(e.target.value);
    }
    const searchForPlayer = () => {
        const APICallString = `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${Api__key}`;
        axios(APICallString)
            .then((resp: AxiosResponse) => {
                setSummonerInfo(resp.data);
                setSummonerName('');
            })
            .catch((error: AxiosError) => console.log(error))
    }

    return (
        <div className='match__history__data'>
            <SearchInput
                placeholder='search your account'
                value={summonerName}
                onChange={handleChange}
                handleSearchFunction={searchForPlayer}
            />
            {
                summonerInfo?.name
            }
            {summonerInfo?.profileIconId ? <img src={`http://ddragon.leagueoflegends.com/cdn/13.18.1/img/profileicon/${summonerInfo?.profileIconId}.png`} /> : null}
            {
                summonerInfo.summonerLevel ? <p>summoner level: {summonerInfo.summonerLevel}</p> : null
            }
        </div>
    )
}

export default matchHistory