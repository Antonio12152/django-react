const GET_USERS = "get users"
const initialState = {
    users: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}
export const getUsers = (users) => ({ type: GET_USERS, users })
export default usersReducer