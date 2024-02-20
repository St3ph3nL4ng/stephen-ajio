'use client'
import React from "react";
import {Box, TextField, Typography} from "@mui/material";
import {createUserHook} from "@/app/hook/createUserHook";
import {deleteUserHook} from "@/app/hook/deleteUserHook";
import {userListHook} from "@/app/hook/userListHook";
import {useRouter} from 'next/navigation';
import Table from "@/app/components/common/Table";
import Modal from "@/app/components/common/Modal";
import Button from "@/app/components/common/Button"

function Home() {
    const router = useRouter();
    const {users, isLoading} = userListHook();
    const {handleSaveNewUser, isNewUser, isError} = createUserHook();
    const {removeBasesData, openModal, setOpenModal, modalId, setModalId} = deleteUserHook();

    return (
        <main className={"homePage"}>
            <Typography variant={"h4"} sx={{color: "green"}}>作成</Typography>
            <form onSubmit={handleSaveNewUser}>
                <Box sx={{display: "flex", gap: "1rem"}}>
                    <Box
                        sx={{
                            width: "auto",
                            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        <TextField
                            hiddenLabel
                            id="outlined"
                            placeholder="Create"
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
                        <Button name={"作成"} type={"submit"} className={"createBtn"}/>
                    </Box>
                </Box>
                <Box sx={{color: "red"}}>
                    {isError}
                </Box>
            </form>
            <Box
                sx={{
                    width: "50%",
                    minWidth: "fit-content",
                    maxWidth: "100%",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                }}
            >
                <Modal
                    title={"Delete User"}
                    description={<Box>Are you sure to delete this user?</Box>}
                    open={openModal}
                    onClickClose={() => {
                        setOpenModal(false)
                    }}
                    onClickDelete={() => {
                        removeBasesData(modalId)
                        setOpenModal(false)
                    }}
                />
                <Table
                    data={users}
                    onClickUpdate={(item) => router.push(`user/${item.id}`)}
                    loading={isLoading}
                    onClickDelete={(item) => {
                        setModalId(item.id)
                        setOpenModal(true)
                    }}/>
            </Box>
        </main>
    );
}

export default Home;
