'user client'
import {userListHook} from "@/app/hook/userListHook";

export function deleteUserHook() {
    const {mutate} = userListHook();
    const removeBasesData = async (userId: string) => {
        try {
            const response = await fetch(`/api/user/${userId}`, {
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