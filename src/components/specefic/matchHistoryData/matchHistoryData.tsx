import { ChangeEvent, useState } from 'react'
import SearchInput from '../../common/searchInput'
import { Api__key } from '../../../services/apiKey';
import axios, { AxiosError, AxiosProgressEvent, AxiosResponse } from 'axios';
const matchHistory = () => {
    const [summonerName, setSummonerName] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSummonerName(e.target.value);
    }
    const searchForPlayer = () => {
        const APICallString = `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${Api__key}`;
        axios(APICallString)
            .then((resp: AxiosResponse) => {
                setSummonerName('')
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
        </div>
    )
}

export default matchHistory