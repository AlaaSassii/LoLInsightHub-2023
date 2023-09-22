import { useEffect, useState } from "react";
import { championDataType } from "../types/championDataType";
import axios, { AxiosError, AxiosResponse } from "axios";

export const useFetchSingleChampion = (name: string) => {
    const [champion, setChampion] = useState<championDataType<string> | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        setLoading(true);
        const argument = {
            version: '13.18.1',
            region: 'en_US',
            name: name || ''
        }
        axios
            .get<championDataType<string>>(`http://ddragon.leagueoflegends.com/cdn/${argument.version}/data/${argument.region}/champion/${argument.name}.json`)
            .then((resp: AxiosResponse) => {
                setChampion(resp.data);
                setLoading(false);
            })
            .catch((err: AxiosError) => setError(err.message));
    }, [])
    return { champion, loading, error }
}