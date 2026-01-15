import { combineReducers, createStore } from "redux";
import sidebarReducer from "./reducers/sidebarReducer";
import authReducer from "./reducers/authReducer";
import accountReducer from "./reducers/accountReducer";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";



const persistConfig = {
  key: "root",
  storage,
  whitelist: ["sidebar", "auth"],
};

const rootReducer = combineReducers ({
    sidebar : sidebarReducer,
    auth : authReducer,
    account : accountReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSIONS__ &&  window._REDUX_DEVTOOLS_EXTENSIONS__();

export const store = createStore(
    persistedReducer,
    composeEnhancers
)


export const persistor = persistStore(store);