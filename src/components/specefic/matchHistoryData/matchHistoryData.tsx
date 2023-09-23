import { ChangeEvent, useState } from 'react'
import SearchInput from '../../common/searchInput'
import { Api__key } from '../../../services/apiKey';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { summonerInfoType } from '../../../types/summonerInfoType';
import { summonerInfoInitialState } from '../../../consts/summonerInfo';
import Data from './data/data';
const matchHistory = () => {
    const [summonerName, setSummonerName] = useState<string>('');
    const [summonerInfo, setSummonerInfo] = useState<summonerInfoType>(summonerInfoInitialState);
    const [error, setError] = useState<string>('')
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSummonerName(e.target.value);
    }
    const searchForPlayer = () => {
        setError('');
        const APICallString = `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${Api__key}`;
        axios(APICallString)
            .then((resp: AxiosResponse) => {
                setSummonerInfo(resp.data);
                setSummonerName('');
            })
            .catch((error: AxiosError) => setError(error.message))
    }

    return (
        <>
            <SearchInput
                placeholder='search your account'
                value={summonerName}
                onChange={handleChange}
                handleSearchFunction={searchForPlayer}
            />
            {
                (!error && summonerInfo.name) ?
                    <Data
                        {...summonerInfo}
                    />
                    :
                    null
            }
        </>
    )
}

export default matchHistory