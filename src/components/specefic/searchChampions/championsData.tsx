import { useEffect } from 'react'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../hooks/useAppSelectore'
import SearchInput from '../../common/searchInput'
import ChampionsContainer from './championsContainer'
import './searchChampions.scss'
import { fetchChampionsData } from '../../../redux/ChampionsData'
const SearchChampions = () => {
    const dispatch = useAppDispatch();
    const data = useAppSelector(state => state.champions.data);
    const loading = useAppSelector(state => state.champions.loading);
    const error = useAppSelector(state => state.champions.error);
    useEffect(() => {
        if (data === null) {
            dispatch(fetchChampionsData());
        }
    }, [])
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