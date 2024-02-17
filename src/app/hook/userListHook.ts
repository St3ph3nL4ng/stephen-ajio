import useSWR from "swr";


export function userListHook() {
    // @ts-ignore
    const fetcher = (...args) => fetch(...args).then(res => res.json())

    const {data: users, error, isLoading, mutate} = useSWR(
        '/api/user',
        fetcher,
        {
            onError: (error: Error) => {
                console.error('Error fetching data:', error);
            },
        }
    );

    return {
        users,
        error,
        isLoading,
        mutate,
    };
}
