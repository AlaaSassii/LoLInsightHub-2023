import { useEffect, useState, ChangeEvent } from 'react'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../hooks/useAppSelectore'
import SearchInput from '../../common/searchInput'
import ChampionsContainer from './championsContainer'
import './searchChampions.scss'
import { fetchChampionsData } from '../../../redux/ChampionsSlice'
import MainLoadingSpinner from '../../common/mainLoadingSpinner'
const SearchChampions = () => {
    const dispatch = useAppDispatch();
    const { data, loading, error } = useAppSelector(state => state.champions);
    const [searchInputValue, setSearchInputValue] = useState<string>('');
    const handleChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchInputValue(event.target.value);
    }
    useEffect(() => {
        if (data === null) {
            dispatch(fetchChampionsData());
        }
    }, [])
    return (
        <div className='search__champions__container'>
            <p>Welcome to the League of Legends Champion Showcase.  Browse, search, and explore champions, then dive into detailed profiles for a complete understanding of your favorite champions.</p>
            <p> Your journey to mastery begins now!</p>
            {
                error !== null
                    ? <p>{error}</p>
                    :
                    loading ?
                        <MainLoadingSpinner /> :
                        <>
                            <SearchInput
                                value={searchInputValue}
                                onChange={handleChangeInputValue}
                                handleSearchFunction={() => alert('')}
                                placeholder='placeholder' />
                            {data !== null && <ChampionsContainer data={data} championName={searchInputValue} />}
                        </>
            }

        </div>
    )
}

export default SearchChampions