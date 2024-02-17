"use client"
import React from 'react';
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import moment from 'moment';

type Data = {
    id?: number;
    name?: string;
    created_at: Data;
    updated_at: Data;
};

type TableProps = {
    data?: Data[];
    loading: boolean;
    handleDelete?: (id: any) => {};
    handleUpdate?: (id: any) => {};
};

const TableCrud: React.FC<TableProps> = ({data = [], loading = false, handleDelete, handleUpdate}) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{width: "100%"}}>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Created</TableCell>
                        <TableCell>Updated</TableCell>
                        <TableCell align={"right"}></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {loading ? (
                        <TableRow>
                            <TableCell colSpan={5} align="center">LOADING...</TableCell>
                        </TableRow>
                    ) : (
                        <>
                            {!data.length ? (
                                <TableRow>
                                    <TableCell colSpan={3} align="center">... NO DATA ...</TableCell>
                                </TableRow>
                            ) : (
                                data.map((item) => (
                                    <TableRow key={item?.id}>
                                        <TableCell>{item?.id}</TableCell>
                                        <TableCell>{item?.name}</TableCell>
                                        <TableCell>{moment(item?.created_at).format('YYYY-MM-DD')}</TableCell>
                                        <TableCell>{moment(item?.updated_at).format('YYYY-MM-DD')}</TableCell>
                                        <TableCell align={"right"}>
                                            <Button sx={{color: "#f7b500"}}
                                                    onClick={() => handleUpdate && handleUpdate(item.id)}>
                                                Update
                                            </Button>
                                            <Button sx={{color: "red"}}
                                                    onClick={() => handleDelete && handleDelete(item.id)}>
                                                Delete
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </>
                    )}

                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TableCrud;
