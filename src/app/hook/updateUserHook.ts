import axios from "axios";
import {useForm} from "react-hook-form";
import React from "react";
import {useRouter} from 'next/navigation';

interface FormData {
    name: string;
    id: number
}

export function updateUserHook(userId: number) {
    const router = useRouter();
    const {register, setValue, reset, formState: {errors},} = useForm<FormData>();
    const [isLoading, setIsLoading] = React.useState(false);

    const handleSaveNewUser = async (data: FormData) => {
        const {name} = data
        try {
            const response = await axios.put(
                `/api/user/${userId}`, {name},
                {headers: {"Content-Type": "application/json"},}
            );
            console.log("hook: ", name, response.data);
            alert("SUCCESSSS")
            // router.push('/')
            return response.data;
        } catch (error) {
            console.error(error);
            setIsLoading(false)
        }
    };

    return {
        handleSaveNewUser,
        isNewUser: register("name", {required: "Name is required"}),
        isError: errors.name?.message,
        isLoading,
        register,
        setValue,
    };
}
