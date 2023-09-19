import React, { useEffect } from 'react'
import { useAppDispatch } from '../../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../../hooks/useAppSelectore';
import { fetchChampionData } from '../../../../redux/SingleChampionSlice';

const ChampionsContainer = () => {
    const dispatch = useAppDispatch();
    const { data, loading, error } = useAppSelector(state => state.singleChampion);
    useEffect(() => {
        const argument = {
            version: '13.18.1',
            region: 'en_US',
            name: 'Aatrox'

        }
        fetchChampionData(argument)
    }, [])

    return (
        <>

        </>
    )
}
export default ChampionsContainer