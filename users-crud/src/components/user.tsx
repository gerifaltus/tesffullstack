import {useUserStore} from "../stores/users/users.store.ts";

export const User = ({user, isVisibleModal, setIsVisibleModal}) => {
    const deleteUser = useUserStore((state) => state.deleteUser);
    const setSelectedUser = useUserStore((state) => state.setSelectedUser);
    return (
        <article key={user.id} id={`user-${user.id}`}>
            <label>Nombre:</label>
            <p> {user.name} </p>

            <label>Apellido:</label>
            <p> {user.lastName} </p>


            <label>Fecha de Nacimiento:</label>
            <p> {user.birthDay} </p>

            <label>Puesto:</label>
            <p> {user.jobPost} </p>

            <label>Salario:</label>
            <p> {user.salary} </p>

            <footer>
                <button
                 onClick={()=>{
                     setSelectedUser(user);
                     setIsVisibleModal(!isVisibleModal);
                 }}
                >
                  Editar
                </button>
                <button
                  onClick={()=>{
                      deleteUser(user.id);
                  }}
                >
                    Eliminar
                </button>
            </footer>

        </article>
    )
}