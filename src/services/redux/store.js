import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import dataReducer from './dataSlice';
import toolReducer from './toolSlice';
import tableReducer from './tableSlice';

const reducer = combineReducers({
  data: dataReducer,
  tool: toolReducer,
  table: tableReducer,
});
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const persistConfig = {
  key: 'main-root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore(
  {
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  },
  composedEnhancer,
);

export const persistor = persistStore(store);
export default store;
