import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import todoListReducer from './TodoSlice/reducer';

const reducers = combineReducers({ todo: todoListReducer });

const persistConfig = {
	key: 'todoTasks',
	storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({ reducer: persistedReducer });
const persistedStore = persistStore(store);

export { store, persistedStore };
