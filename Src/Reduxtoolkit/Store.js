import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import { combineReducers } from 'redux'
import { persistReducer, persistStore } from 'redux-persist';
import userslisttt from './Slice';
import cardDetails from '../Reduxtoolkit/Slice'
import AsyncStorage from '@react-native-async-storage/async-storage';
const userreducer = combineReducers({
    userslisttt,
    // cardDetails

})
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}
const persistedReducer = persistReducer(persistConfig, userreducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({ ///  ERROR  A non-serializable value was detected in an action, in the path: `register`. Value: [Function register]
        serializableCheck: false,
    }),
});

export const persistor = persistStore(store)
