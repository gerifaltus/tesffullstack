import {useUserStore} from "../stores/users/users.store.ts";
import {User} from "./user.tsx";


export const UsersList = ({isVisibleModal, setIsVisibleModal}) => {

    const users = useUserStore((state) => state.users);
    return (
        <>
            {users.map((user) => (
               <User
                   user={user}
                   isVisibleModal={isVisibleModal}
                   setIsVisibleModal={setIsVisibleModal}
               />
            ))}
        </>


    )
}