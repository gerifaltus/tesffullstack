import {useUserStore} from "../stores/users/users.store.ts";
import './css/register-styles.css';
import {useEffect} from "react";

export const RegisterForm = ({isVisibleModal, setIsVisibleModal}) => {
    const name = useUserStore((state) => state.name);
    const lastName = useUserStore((state) => state.lastName);
    const birthDay = useUserStore((state) => state.birthDay);
    const jobPost = useUserStore((state) => state.jobPost);
    const salary = useUserStore((state) => state.salary);

    const setName= useUserStore((state) => (state.setName));
    const users = useUserStore((state) => (state.users));
    const setLastName = useUserStore((state) => (state.setLastName));
    const setBirthDay = useUserStore((state) => (state.setBirthDay) );
    const setJobPost = useUserStore((state) => (state.setJobPost) );
    const setSalary = useUserStore((state) => (state.setSalary));
    const selectedUser = useUserStore((state) => state.selectedUser);
    const setSelectedUser = useUserStore((state) => state.setSelectedUser);

    const addUser = useUserStore((state) => state.addUser);
    const generateId = () =>
        Date.now().toString(35) + Math.random().toString(36).slice(2);
    let currentUser = selectedUser[0];

    const cleanForm = () => {
        setName('');
        setLastName('');
        setBirthDay('');
        setJobPost('');
        setSalary('');
        setIsVisibleModal(!isVisibleModal);
        setSelectedUser(null);
    }

    const handleAddUser = () => {
        addUser(
            {
                id: generateId(),
                name,
                lastName,
                birthDay,
                jobPost,
                salary
            }
        );
        setIsVisibleModal(!isVisibleModal);
        cleanForm();
    };

    const handleEditUser = () => {
        let findedIndex = users.findIndex(user => user.id === currentUser.id);
        users[findedIndex] = {
            id: currentUser.id,
            name,
            lastName,
            birthDay,
            jobPost,
            salary,
        };
        setIsVisibleModal(!isVisibleModal);
        cleanForm();
    }

    useEffect(()=>{
        if(currentUser !== null & currentUser !== undefined) {
            setName(currentUser.name);
            setLastName(currentUser.lastName);
            setBirthDay(currentUser.birthDay);
            setJobPost(currentUser.jobPost);
            setSalary(currentUser.salary);
        }
    },[selectedUser])

    return (
        <div className="registerForm">
            <div className="registerForm__container">
                <button
                    className="registerForm__close"
                    onClick={()=>{
                        setIsVisibleModal(!isVisibleModal);
                        setName('');
                        setLastName('');
                        setBirthDay('');
                        setJobPost('');
                        setSalary('');
                        setSelectedUser([]);
                    }}
                >
                    x
                </button>
                <section>
                    <label> Nombre: </label>
                    <input
                        type={"text"}
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                    />
                </section>
                <section>
                    <label> Apellido: </label>
                    <input
                        type={"text"}
                        value={lastName}
                        onChange={(e) =>
                            setLastName(e.target.value)
                        }
                    />
                </section>
                <section>
                    <label> Fecha de Nacimiento: </label>
                    <input
                        type={"date"}
                        value={birthDay}
                        onChange={(e) => {
                            setBirthDay(e.target.value)
                        }}
                    />
                </section>
                <section>
                    <label> Puesto: </label>
                    <input
                        type={"text"}
                        value={jobPost}
                        onChange={(e) => {
                            setJobPost(e.target.value)
                        }}
                    />
                </section>
                <section>
                    <label> Salario: </label>
                    <input
                        type={"text"}
                        value={salary}
                        onChange={
                            (e) => {
                                setSalary(e.target.value)
                            }
                        }
                    />
                </section>
                <footer>
                    <button
                        onClick={() => {

                            if (!currentUser) {
                                handleAddUser();
                            } else {
                                handleEditUser();
                            }
                        }}
                    >
                        {currentUser ? 'Guardar' : 'Agregar'}
                    </button>
                </footer>
            </div>
        </div>
    )
};