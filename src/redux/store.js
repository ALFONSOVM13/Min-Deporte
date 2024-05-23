import { configureStore, combineReducers } from '@reduxjs/toolkit';
import AuthReducer from './slices/auth.slice.js';
import AppReducer from './slices/app.slice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';

const reducers = combineReducers({
  authState: AuthReducer,
  appState: AppReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['authState', 'appState'],
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
export const RootState = reducers;
export const AppStore = store; 
export const AppDispatch = store.dispatch; 