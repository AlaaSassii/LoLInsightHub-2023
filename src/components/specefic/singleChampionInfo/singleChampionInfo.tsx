import { useParams } from "react-router-dom"
import Container from "../../common/container"
import MainLoadingSpinner from "../../common/mainLoadingSpinner";
import ChampionDef from "./championDef";
import ChampionType from "./championType";
import AllyTips from "./allyTips";
import EnemyTips from "./emenyTips";
import ChampionInfo from "./championInfo";
import ChampionSkins from "./championSkins";
import './singleChampionInfo.scss'
import { useFetchSingleChampion } from "../../../hooks/useFetchSingleChampionInfo";
const SingleChampionInfo = () => {
    const { name } = useParams();
    const { champion, error, loading } = useFetchSingleChampion(name || '')
    if (error) return error;
    if (loading) return <MainLoadingSpinner />
    return (
        champion !== null
        &&
        <Container className="champion__info__contaienr">
            <ChampionDef
                name={name as string}
                title={champion?.data?.[name as string]?.title}
                lore={champion?.data?.[name as string]?.lore}
                spells={champion?.data?.[name as string]?.spells}
                passive={champion?.data?.[name as string]?.passive}

            />
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