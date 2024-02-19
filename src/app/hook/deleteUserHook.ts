'user client'
import {userListHook} from "@/app/hook/userListHook";

export function deleteUserHook() {
    const {mutate} = userListHook();
    const removeBasesData = async (id: string) => {
        try {
            const res = await fetch(`/api/user/${id}`, {
                method: 'DELETE',
            });
            mutate()
            console.log('User deleted successfully');
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    };

    return {removeBasesData};
}