import { useEffect, useState } from 'react';

type AsyncState<T> = {
    pending: boolean;
    success: boolean;
    error: any;
    data: T | null;
};
function useAsync<T>(asyncFunction: () => Promise<T>, deps: any[] = []): AsyncState<T> {
    const [state, setState] = useState<AsyncState<T>>({
        pending: false,
        success: false,
        error: null,
        data: null,
    });

    useEffect(() => {
        setState({
            pending: true,
            success: false,
            error: null,
            data: null,
        });

        asyncFunction()
            .then((data) => {
                setState({
                    pending: false,
                    success: true,
                    error: null,
                    data: data,
                });
            })
            .catch((error) => {
                setState({
                    pending: false,
                    success: false,
                    error: error,
                    data: null,
                });
            });
    }, deps);

    return state;
}

export default useAsync;
