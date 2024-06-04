import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
    id: number;
    name: string;
    lastName: string;
    birthDay: string;
    jobPost: string;
    salary: string;
}

interface userState {
    name : string;
    lastName : string;
    birthDay: string;
    jobPost: string;
    salary: string;

    users: User[];
    selectedUser: User[];

    addUser: (user:User) => void;
    setSelectedUser: (user: User) => void;
    deleteUser: (id: number) => void;


    setName: (value: string) => void;
    setLastName: (value: string) => void;
    setBirthDay: (value: string) => void;
    setJobPost: (value: string) => void;
    setSalary: (value: string) => void;
}

export const useUserStore = create<userState>()(
    persist((set) => ({
        name: '',
        lastName: '',
        birthDay: '',
        jobPost: '',
        salary: '',
        users: [],
        selectedUser:[],


        setName: (value: string) => set({name: value}),
        setLastName: (value: string) => set({lastName: value}),
        setBirthDay: (value: string) => set({birthDay: value}),
        setJobPost: (value: string) => set({jobPost: value}),
        setSalary : (value: string) => set({salary: value}),
        addUser: (user:User) => set(state=>
            ({
                users: [
                    ...state.users,
                    user
                ]
            })
        ),
        deleteUser: (id: number) => set(
            state => ({
                users: state.users.filter(user => user.id !== id)
            })
        ),
        setSelectedUser: (user: User) => set(state => ({
           selectedUser: [ user ]
         })
        ),

    }), {
        name: 'bear-storage',
        getStorage: () => localStorage,
    })
)

