import React, { ChangeEvent, useState } from 'react'
import SearchInput from '../../common/searchInput'
import { Api__key } from '../../../services/apiKey';
import { baseUrl } from '../../../services/baseUrl';
import axios from 'axios';
const matchHistory = () => {
    const [summonerName, setSummonerName] = useState<string>('');
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSummonerName(e.target.value);
    }
    const searchForPlater = () => {
        const APICallString = `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-account/${summonerName}?api_key=${Api__key}`;
        axios(APICallString)
            .then(resp => {
                console.log('');
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='match__history__data'>
            <SearchInput
                placeholder='search your account'
                value={summonerName}
                onChange={handleChange}
                handleSearchFunction={searchForPlater}
            />
        </div>
    )
}

export default matchHistory