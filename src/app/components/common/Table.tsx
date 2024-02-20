import React from 'react';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import moment from 'moment';
import FormData from "@/app/components/types/FormData";
import Button from "@/app/components/common/Button"

interface FunctionsProps {
    data?: FormData[];
    loading?: boolean;
    onClickUpdate?: (item: FormData) => void;
    onClickDelete?: (item: FormData) => void;
}

const TableCompoent: React.FC<FunctionsProps> = ({data = [], onClickUpdate, onClickDelete, loading = false}) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{width: '100%'}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Created At</TableCell>
                        <TableCell>Updated At</TableCell>
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
                                    <TableCell colSpan={5} align="center">...NO DATA...</TableCell>
                                </TableRow>
                            ) : (
                                <>
                                    {data?.map((item) => (
                                        <TableRow key={item?.id}>
                                            <TableCell>{item?.id}</TableCell>
                                            <TableCell>{item?.name}</TableCell>
                                            <TableCell>{moment(item?.created_at).format('YYYY/MM/DD HH:mm:ss')}</TableCell>
                                            <TableCell>{moment(item?.updated_at).format('YYYY/MM/DD HH:mm:ss')}</TableCell>
                                            <TableCell align="right">
                                                <Button type={"button"} name={"更新"} className={"updateColor"}
                                                        onClickButton={() => onClickUpdate?.(item)}/>
                                                <Button type={"button"} name={"消去"} className={"deleteColor"}
                                                        onClickButton={() => onClickDelete?.(item)}/>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </>
                            )}
                        </>
                    )}

                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TableCompoent;
