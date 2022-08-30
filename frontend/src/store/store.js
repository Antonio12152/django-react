import { combineReducers, createStore } from "redux";
import usersReducer from "./reducers/usersRed";
import profileReducer from "./reducers/profileRed";

const reducers = combineReducers({
    users: usersReducer,
    profile: profileReducer,
})

const store = createStore(reducers)
window.store = store
export default store