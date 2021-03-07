import {UserActionTypes, UserAction, UserState} from "../../types/user";

const initialState: UserState = {
    users: [],
    loading: true,
    error: null,
    search: '',
    searchData: [],
    isOpen:false,
    modal:{}
}


export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS:
            return {...state, loading: false}
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return {...state, users: action.payload, loading: true}
        case UserActionTypes.FETCH_USERS_ERROR:
            return {...state, error: action.payload}
        case UserActionTypes.FETCH_USERS_SEARCH_INPUT:
            return {...state, search: action.payload}
        case UserActionTypes.FETCH_USERS_SEARCH_DATA:
            return {...state, searchData: action.payload}
        case UserActionTypes.FETCH_USERS_SEARCH_RESET:
            return {...state, search:'', searchData:[]}
        case UserActionTypes.MODAL_USERS:
            return {...state, modal:action.payload}
        default:
            return state
    }
}