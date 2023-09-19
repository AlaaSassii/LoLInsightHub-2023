import { useEffect, useState } from 'react';
import { getChampionsData } from '../services/riotGamesApiService.ts';
import { championsDataType } from '../types/championsDataType.ts';
import { AxiosError, AxiosResponse } from 'axios';

type typeUseChampionsDataResponse = {
    pending: boolean;
    data: championsDataType | null;
    error: string | null;
}

function useChampionsData(version: string, region: string): typeUseChampionsDataResponse {
    const [data, setData] = useState<championsDataType | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setData(null);
        setError(null);
        setLoading(true);

        getChampionsData(version, region)
            .then((response: AxiosResponse) => {
                setData(response.data);
                setLoading(false);
            })
            .catch((error: AxiosError) => {
                setError(error.message);
                setLoading(false);
            });
    }, [version, region]);

    return { pending: loading, data, error };
}

export default useChampionsData;
