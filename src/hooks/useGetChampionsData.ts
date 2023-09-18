import { useEffect, useState } from 'react';
import { getChampionsData } from '../services/riotGamesApiService.ts';
import { championsData } from '../types/championsDataType.ts';
import { AxiosError } from 'axios';

type typeUseChampionsDataResponse = {
    pending: boolean;
    data: championsData | null;
    error: AxiosError | null;
}

function useChampionsData(version: string, region: string): typeUseChampionsDataResponse {
    const [data, setData] = useState<championsData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<AxiosError | null>(null);

    useEffect(() => {
        setData(null);
        setError(null);
        setLoading(true);

        getChampionsData(version, region)
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch((error: AxiosError) => {
                setError(error);
                setLoading(false);
            });
    }, [version, region]);

    return { pending: loading, data, error };
}

export default useChampionsData;
