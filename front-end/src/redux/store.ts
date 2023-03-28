import { legacy_createStore } from "redux";
import { appReducer } from "./reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  auth: appReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = legacy_createStore(persistedReducer);
export const persistor = persistStore(store);




console.log(store.getState());
store.subscribe(() => {
  console.log(store.getState());
});
