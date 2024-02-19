import React from "react";
import axios from "axios";
import useSWR from "swr";
import {useForm} from "react-hook-form";
import {useParams, useRouter} from "next/navigation";
import fetcher from "@/app/lib/fetcher"

interface FormData {
    id: number
    name: string;
}

export function updateUserHook() {
    const {id} = useParams();
    const router = useRouter()
    const [isLoading, setIsLoading] = React.useState(false);

    const {register, setValue, handleSubmit, formState: {errors}} = useForm<FormData>();
    const {data: user} = useSWR<FormData>(`/api/user/${id}`, fetcher);

    React.useEffect(() => {
        if (user) {
            setValue('name', user.name);
        }
    }, [user, setValue])

    const handleSaveNewUser = async (data: FormData) => {
        const {name} = data
        try {
            const response = await axios.put(
                `/api/user/${id}`, {name},
                {headers: {"Content-Type": "application/json"},}
            );
            console.log("hook: ", name, response.data);
            router.push('/')
            return response.data;
        } catch (error) {
            console.error(error);
            setIsLoading(false)
        }
    };

    return {
        handleSaveNewUser: handleSubmit(handleSaveNewUser),
        updateRegister: register("name", {required: "Name is required"}),
        isError: errors.name?.message,
        isLoading,
    };
}
