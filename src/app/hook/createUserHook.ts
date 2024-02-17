import axios from "axios";
import {SubmitHandler, useForm} from "react-hook-form";
import {userListHook} from "@/app/hook/userListHook";

interface FormData {
    name: string;
}

export function createUserHook() {
    const {mutate} = userListHook();
    const {register, handleSubmit, reset, formState: {errors},} = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        try {
            const response = await axios.post(
                "/api/user",
                data,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            console.log("response", response.data);
            reset(); // Reset the form after submission
            mutate();
            return response.data;
        } catch (error) {
            console.error(error);
        }
    };

    return {
        handleSaveNewUser: handleSubmit(onSubmit),
        isNewUser: register("name", {required: "Name is required"}),
        isError: errors.name?.message
    };
}
