export interface UserState {
    users: any[];
    loading: boolean;
    error: null | string;
    search:string,
    searchData:any[],
    isOpen:boolean,
    modal:object
}

export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
    FETCH_USERS_SEARCH_INPUT = 'FETCH_USERS_SEARCH_INPUT',
    FETCH_USERS_SEARCH_DATA = 'FETCH_USERS_SEARCH_DATA',
    FETCH_USERS_SEARCH_RESET= 'FETCH_USERS_SEARCH_RESET',
    MODAL_USERS= 'MODAL_USERS',
}

interface FetchUsersAction {
    type: UserActionTypes.FETCH_USERS;
}

interface FetchUsersSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: any[];
}

interface FetchUsersErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string
}

interface FetchSearchUsersAction {
    type: UserActionTypes.FETCH_USERS_SEARCH_INPUT;
    payload: string;
}

interface FetchSearchDataUsersAction {
    type: UserActionTypes.FETCH_USERS_SEARCH_DATA;
    payload: any[];
}

interface FetchSearchDataResetAction  {
    type: UserActionTypes.FETCH_USERS_SEARCH_RESET;
}

interface ModalUsers  {
    type: UserActionTypes.MODAL_USERS;
    payload: object;
}

export type UserAction = FetchUsersAction | FetchUsersErrorAction | FetchUsersSuccessAction | FetchSearchUsersAction | FetchSearchDataUsersAction | FetchSearchDataResetAction | ModalUsers;
