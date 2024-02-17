'use client'
import React from "react"
import {Box, Button, TextField, Typography} from "@mui/material";
import styles from "@/app/page.module.css";
import useSWR from 'swr';
import {updateUserHook} from "@/app/hook/updateUserHook";
import {SubmitHandler, useForm} from 'react-hook-form';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface User {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}

interface FormData {
    name: string;
}

export default function UserRead({params}: { params: { id: number } }) {
    const {data: user,} = useSWR<User>(`/api/user/${params.id}`, fetcher);

    const {register, handleSubmit, setValue, formState: {errors}} = useForm<FormData>();

    const {handleSaveNewUser} = updateUserHook(params.id)

    React.useEffect(() => {
        if (user) {
            setValue('name', user.name);
        }
    }, [user, setValue])

    const onSubmit: SubmitHandler<FormData> = (data) => {
        handleSaveNewUser({name: data?.name})
    };


    return (
        <React.Fragment>
            <Box
                className={styles.main}
                sx={{
                    width: "100%",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                }}
            >
                <Typography variant={"h4"} sx={{color: "#f7b500"}}>UPDATE</Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box sx={{display: "flex", gap: "1rem", marginTop: "1rem"}}>
                        <Box
                            sx={{
                                width: "auto",
                                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                            }}
                        >
                            <TextField
                                id="outlined"
                                label="Outlined"
                                variant="outlined"
                                {...register('name', {required: 'Name is required'})}
                            />
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                width: "auto",
                                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                            }}
                        >
                            <Button
                                type="submit"
                                style={{
                                    color: "#f7b500",
                                    border: "1px solid #f7b500",
                                    padding: "10px 20px",
                                }}
                            >
                                Update
                            </Button>
                        </Box>
                    </Box>

                </form>
            </Box>
        </React.Fragment>
    )
}
