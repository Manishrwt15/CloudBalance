import { combineReducers, createStore } from "redux";
import sidebarReducer from "./reducers/sidebarReducer";



const rootReducer = combineReducers ({
    sidebar : sidebarReducer,
})

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSIONS_ &&  window._REDUX_DEVTOOLS_EXTENSIONS_();

export const store = createStore(
    rootReducer,
    composeEnhancers
)