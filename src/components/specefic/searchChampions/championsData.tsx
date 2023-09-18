import { useState } from 'react'
import SearchInput from '../../common/searchInput'
import ChampionsContainer from './championsContainer'
import './searchChampions.scss'
import useFetch from '../../../hooks/useFetch'
import { versions } from '../../../services/versions'
import { regions } from '../../../services/regions'
import { getChampionsData } from '../../../services/riotGamesApiService.ts'
const SearchChampions = () => {
    const [value, setValue] = useState<string>('');
    return (
        <div className='search__champions__container'>
            <p>Welcome to the League of Legends Champion Showcase.  Browse, search, and explore champions, then dive into detailed profiles for a complete understanding of your favorite champions.</p>
            <p> Your journey to mastery begins now!</p>
            <SearchInput
                handleSearchFunction={() => alert('')}
                placeholder='placeholder' />
            <ChampionsContainer />

        </div>
    )
}

export default SearchChampions