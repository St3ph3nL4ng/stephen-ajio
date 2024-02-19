import useSWR from "swr";
import fetcher from "@/app/lib/fetcher"


export interface User {
    id: number;
    name: string;
}

export function readUserHook(userId: number) {
    const {data: user, error, isLoading, mutate} = useSWR<User>(
        `/api/user/${userId}`, fetcher,
        {
            onError: (error: Error) => {
                console.error('Error fetching data:', error);
            },
        }
    );

    return {
        user,
        error,
        readLoad: isLoading,
        readMute: mutate
    };
}
