import { configureStore ,combineReducers} from "@reduxjs/toolkit";
import { CartSlice } from "./slices/cart-slice.ts";
import { UserSlice } from "./slices/user-slice.ts";
import {OrdersSlice} from "./slices/order-slice.ts";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'


  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }
  
  const rootReducer = combineReducers({user : UserSlice.reducer , cart : CartSlice.reducer,orders : OrdersSlice.reducer})


const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = configureStore({
    reducer : persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;