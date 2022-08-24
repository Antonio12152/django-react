import { combineReducers, createStore } from "redux";
import usersReducer from "./reducers/usersRed";

const reducers = combineReducers({
    users: usersReducer
})

const store = createStore(reducers)
window.store = store
export default store