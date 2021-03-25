import {UserActionTypes, UserAction} from '../../types/user';
import {Dispatch} from 'redux';
import axios from 'axios';

const wait = (ms: number) => new Promise((resolve) => {
    setTimeout(resolve, ms)
})

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USERS})

            await wait(5000)

            const response = await axios.get('https://jsonplaceholder.typicode.com/users');

            dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data})

        } catch (err) {
            dispatch({type: UserActionTypes.FETCH_USERS_ERROR, payload: 'Error when retrieving user data !'})
        }
    }
}

export const searchUsers = (str: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        dispatch({type: UserActionTypes.FETCH_USERS_SEARCH_INPUT, payload: str})
    }
}

export const searchUsersAdd = (arr: any[]) => {
    return async (dispatch: Dispatch<UserAction>) => {
        dispatch({type: UserActionTypes.FETCH_USERS_SEARCH_DATA, payload: arr})
    }
}

export const resetSearchData = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USERS_SEARCH_RESET});

            const response = await axios.get('https://jsonplaceholder.typicode.com/users');

            dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data});
        } catch (err) {
            dispatch({type: UserActionTypes.FETCH_USERS_ERROR, payload: 'Error deleting data !'})
        }
    }
}

export const modalAdd = (value: object) => {
    return async (dispatch: Dispatch<UserAction>) => {
        dispatch({type: UserActionTypes.MODAL_USERS, payload: value})
    }
}

export const modalRemove = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        dispatch({type: UserActionTypes.MODAL_USERS, payload: {}})
    }
}

export const deleteFilteredUser = (value: any[]) => {
    return async (dispatch: Dispatch<UserAction>) => {
        dispatch({type: UserActionTypes.FETCH_USERS_SEARCH_DATA, payload: value})
    }
}

export const deleteUser = (value: any[]) => {
    return async (dispatch: Dispatch<UserAction>) => {
        dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: value})
    }
}