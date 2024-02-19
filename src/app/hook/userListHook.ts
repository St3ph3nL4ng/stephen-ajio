import useSWR from "swr";
import fetcher from "@/app/lib/fetcher"

export function userListHook() {
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
