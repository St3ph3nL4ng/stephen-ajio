'use client'
import React from "react"
import {updateUserHook} from "@/app/hook/updateUserHook";
import {Box, TextField, Typography} from "@mui/material";
import Button from "@/app/components/common/Button";

export default function UserRead() {
    const {handleSaveNewUser, handleBack, updateRegister, isError} = updateUserHook()

    return (
        <React.Fragment>
            <Box
                className={"homePage"}
                sx={{
                    width: "100%",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                }}
            >
                <Typography variant={"h4"} sx={{color: "#f7b500"}}>更新</Typography>
                <form onSubmit={handleSaveNewUser}>
                    <Box sx={{display: "flex", gap: "1rem", marginTop: "1rem"}}>
                        <Box
                            sx={{
                                width: "auto",
                                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                            }}
                        >
                            <TextField
                                hiddenLabel
                                id="outlined"
                                placeholder="Update"
                                variant="outlined"
                                {...updateRegister}
                            />
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                gap: "1rem",
                                width: "auto",
                            }}
                        >
                            <Button
                                type={"submit"}
                                name={"更新"}
                                className={"updateColor updateColorBtn"}
                            />
                            <Button
                                onClickButton={handleBack}
                                name={"裏面"}
                                className={"cancelColor cancelColorBtn"}
                            />
                        </Box>
                    </Box>
                    <Box sx={{color: "red"}}>
                        {isError}
                    </Box>
                </form>
            </Box>
        </React.Fragment>
    )
}
