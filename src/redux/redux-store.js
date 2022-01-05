import { combineReducers, createStore } from "redux";
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from "./usersReducer";
let reducers = combineReducers({
    profilePages:profileReducer,
    dialogsPages:dialogsReducer,
    sidebar:sidebarReducer,
    usersPage:usersReducer
});
let store = createStore(reducers);
export default store;