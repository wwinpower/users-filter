import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    fetchUsers,
    searchUsers,
    searchUsersAdd,
    resetSearchData,
    modalAdd,
    modalRemove,
    deleteUser
} from "../../store/action-creators/user";

import classes from "./UserList.module.scss";
import UserCard from './UserCard/UserCard';
import Search from '../Search/Search';
import Loader from '../Loader/Loader';
import UserModal from "../UserModal/UserModal";

interface RootState {
    user: {
        users: any[];
        loading: boolean;
        error: null | string;
        search: any;
        searchData: any[];
        modal: {
            company: string,
            address: string
        };
    }
}

const UserList: React.FC = () => {
    const users = useSelector((state: RootState) => state.user.users);
    const loading = useSelector((state: RootState) => state.user.loading);
    const error = useSelector((state: RootState) => state.user.error);
    const search = useSelector((state: RootState) => state.user.search);
    const searchData = useSelector((state: RootState) => state.user.searchData);
    const modal = useSelector((state: RootState) => state.user.modal);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])


    const handlerChangeSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
        let str = e.target.value.toLowerCase()

        dispatch(searchUsers(str))
        const newArr = users
            .filter(
                item =>
                    item.name.toLowerCase().includes(str.toLowerCase()) ||
                    item.email.toLowerCase().includes(str.toLowerCase()) ||
                    item.username.toLowerCase().includes(str.toLowerCase())
            )
            .map(item => {
                let newName = item.name.replace(
                    new RegExp(str, 'gi'),
                    (match: string): any =>
                        `<mark>${match}</mark>`
                )
                let newEmail = item.email.replace(
                    new RegExp(str, 'gi'),
                    (match: string): any =>
                        `<mark>${match}</mark>`
                )
                let newUserName = item.username.replace(
                    new RegExp(str, 'gi'),
                    (match: string): any =>
                        `<mark>${match}</mark>`
                )
                return {
                    ...item,
                    name: newName,
                    email: newEmail,
                    username: newUserName
                }
            })
        dispatch(searchUsersAdd(newArr))
    }

    const handlerResetSearchData = () => {
        dispatch(resetSearchData())
    }

    const open = (id: number) => {
        let filtered = users.find((user) => user.id === id);

        dispatch(modalAdd({
            company: filtered.company.name,
            address: filtered.address.street
        }))
    }

    const close = () => {
        dispatch(modalRemove())
    }

    const removeUser = (id: number) => {
        let arr = [...users];

            arr = arr.filter((user)=> user.id !== id)

        dispatch(deleteUser(arr))
    }

    return (
        <>
            <section className={classes.search}>
                <Search onChange={handlerChangeSearch} onClick={handlerResetSearchData} search={search}/>
            </section>
            {
                !error ?
                    !loading ?
                        (<Loader/>)
                        : <section className={classes['UserList']}>
                            {

                                search.length > 0
                                    ? searchData.map(user => (
                                        <UserCard
                                            user={user}
                                            key={user.id}
                                            open={open}
                                            removeUser={removeUser}
                                        />
                                    ))
                                    : users.map(user => (
                                        <UserCard
                                            user={user}
                                            key={user.id}
                                            open={open}
                                            removeUser={removeUser}
                                        />
                                    ))

                            }
                        </section>
                    : <h2 className={classes['error']}>{error}</h2>
            }

            {
                Object.keys(modal).length !== 0
                    ? <UserModal
                        street={modal.address}
                        company={modal.company}
                        close={close}
                    /> : null
            }
        </>
    );
};

export default UserList;