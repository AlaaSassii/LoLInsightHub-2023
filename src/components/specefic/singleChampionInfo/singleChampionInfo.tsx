import { useParams } from "react-router-dom"
import Container from "../../common/container"
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelectore";
import { useEffect } from "react";
import { fetchChampionData } from "../../../redux/SingleChampionSlice";
import MainLoadingSpinner from "../../common/mainLoadingSpinner";

const SingleChampionInfo = () => {
    const { name } = useParams();
    const dispatch = useAppDispatch();
    const { data, loading, error } = useAppSelector(state => state.singleChampion);
    useEffect(() => {
        const argument = {
            version: '13.18.1',
            region: 'en_US',
            name: name || ''

        }
        dispatch(fetchChampionData(argument))
    }, [])
    if (error) return error;
    if (loading) return <MainLoadingSpinner />
    return (
        <Container>{name}</Container>
    )
}

export default SingleChampionInfo