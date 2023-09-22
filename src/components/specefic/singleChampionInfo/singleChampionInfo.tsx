import { useParams } from "react-router-dom"
import Container from "../../common/container"
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelectore";
import { useEffect, useState } from "react";
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
    console.log({ name })
    const dispatch = useAppDispatch();
    const { data: champion, loading, error } = useAppSelector(state => state.singleChampion);
    useEffect(() => {
        const argument = {
            version: '13.18.1',
            region: 'en_US',
            name: name || ''
        }
        dispatch(fetchChampionData(argument));
    }, [])
    if (error) return error;
    if (loading) return <MainLoadingSpinner />
    return (
        champion !== null
        &&
        <Container>
            <ChampionDef
                name={name as string}
                title={champion?.data?.[name as string]?.title}
                lore={champion?.data?.[name as string]?.lore}
                spells={champion?.data?.[name as string]?.spells}
                passive={champion?.data?.[name as string]?.passive} />
            <ChampionType
                tags={champion?.data?.[name as string]?.tags}
            />
            <AllyTips
                allytips={champion?.data?.[name as string]?.allytips}
            />
            <EnemyTips
                enemytips={champion?.data?.[name as string]?.enemytips}
            />
            <ChampionInfo info={champion?.data?.[name as string]?.info} />
            <ChampionSkins name={name} skins={champion?.data?.[name as string]?.skins} />
        </Container>
    )
}

export default SingleChampionInfo