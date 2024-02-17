'use client'
import React from "react";
import styles from "./page.module.css";
import TableCrud from "@/app/component/TableCrud"
import {Box, Button, TextField, Typography} from "@mui/material";
import {createUserHook} from "@/app/hook/createUserHook";
import {deleteUserHook} from "@/app/hook/deleteUserHook";
import {userListHook} from "@/app/hook/userListHook";
import {useRouter} from 'next/navigation';

function Home() {
    const router = useRouter();
    const {users, isLoading, mutate} = userListHook();
    const {handleSaveNewUser, isNewUser, isError} = createUserHook();
    const {removeBasesData} = deleteUserHook();

    return (
        <main className={styles.main}>
            <Typography variant={"h4"} sx={{color: "green"}}>CREATE</Typography>
            <form onSubmit={handleSaveNewUser}>
                <Box sx={{display: "flex", gap: "1rem"}}>
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
                            {...isNewUser}
                        />
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            width: "auto",
                            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        <Button type="submit" style={{padding: "10px 20px", border: "1px solid green", color: "green"}}>
                            Create
                        </Button>
                    </Box>
                </Box>
                <Box sx={{color: "red"}}>
                    {isError}
                </Box>
            </form>
            <Box
                sx={{
                    width: "100%",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                }}
            >
                <TableCrud
                    data={users}
                    loading={isLoading}
                    //@ts-ignore
                    handleUpdate={(userId) => {
                        router.push(`/user/${userId}`)
                        //@ts-ignore
                        mutate()
                    }}
                    handleDelete={(userId) => removeBasesData(userId)}
                />
            </Box>
        </main>
    );
}

export default Home;
