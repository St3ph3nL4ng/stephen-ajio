'use client'
import React from "react"
import styles from "@/app/page.module.css";
import {updateUserHook} from "@/app/hook/updateUserHook";
import {Box, Button, TextField, Typography} from "@mui/material";

export default function UserRead() {
    const {handleSaveNewUser, updateRegister, isError, isLoading} = updateUserHook()

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
                                {isLoading ? "Updating..." : "Update"}
                            </Button>
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
