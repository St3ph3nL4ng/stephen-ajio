import React from "react";
import {userListHook} from "@/app/hook/userListHook";

export function deleteUserHook() {
    const {mutate} = userListHook();
    const [openModal, setOpenModal] = React.useState(false);
    const [modalId, setModalId] = React.useState(false);
    const removeBasesData = async (id: boolean) => {
        try {
            const res = await fetch(`/api/user/${id}`, {
                method: 'DELETE',
            });
            mutate()
            console.log(res, 'User deleted successfully');
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    };

    return {removeBasesData, openModal, setOpenModal, modalId, setModalId};
}