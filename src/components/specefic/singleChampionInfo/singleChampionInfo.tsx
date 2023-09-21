import { useParams } from "react-router-dom"
import Container from "../../common/container"
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelectore";
import { useEffect } from "react";
import { fetchChampionData } from "../../../redux/SingleChampionSlice";
import MainLoadingSpinner from "../../common/mainLoadingSpinner";
import ChampionDef from "./championDef";
import ChampionType from "./championType";
import AllyTips from "./allyTips";
import EnemyTips from "./emenyTips";
import ChampionInfo from "./championInfo";
import ChampionSkins from "./championSkins";
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
        <Container>
            <ChampionDef />
            <ChampionType />
            <AllyTips />
            <EnemyTips />
            <ChampionInfo />
            <ChampionSkins />
        </Container>
    )
}

export default SingleChampionInfo