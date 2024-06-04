import './App.css'
import {RegisterForm} from "./components/registerForm.tsx";
import {UsersList} from "./components/usersList.tsx";
import {useState} from "react";
import './components/css/user-list.css';
import {useUserStore} from "../src/stores/users/users.store.ts";




function App() {
    const [isVisibleModal, setIsVisibleModal] =
        useState(false);
    const users = useUserStore((state) => state.users);


    return (
    <>
        {isVisibleModal === true && (
            <RegisterForm
                isVisibleModal={isVisibleModal}
                setIsVisibleModal={setIsVisibleModal}
            />
        )}


        <section className='usersList'>
            <header className='usersList__header'>
                <button
                    onClick = {
                      () => {
                          setIsVisibleModal(!isVisibleModal);
                      }
                    }


                >
                    Agregar Usuario
                </button>


            </header>
            <div className='usersList__content'>
                {users.length > 0 ?
                    ( <UsersList
                            isVisibleModal={isVisibleModal}
                            setIsVisibleModal={setIsVisibleModal}
                        />
                    ) :
                    (<p> No hay usuarios para mostrar </p>)}

            </div>

        </section>


    </>
    )
}

export default App
