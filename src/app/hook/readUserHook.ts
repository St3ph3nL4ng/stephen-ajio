import useSWR from "swr";
import fetcher from "@/app/lib/fetcher"
import FormData from "@/app/components/types/FormData";
import {useParams} from "next/navigation";

export function readUserHook() {
    const {id} = useParams();
    const {data: user, error, isLoading, mutate} = useSWR<FormData>(
        `/api/user/${id}`, fetcher,
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
