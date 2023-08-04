import {
  configureStore,
  createListenerMiddleware,
  isAnyOf,
} from '@reduxjs/toolkit';

import counterReducer, {
  decrement,
  increment,
  incrementByAmount,
} from './counter/counterSlice';
import globalSlice from './global/globalSlice';
import getDataSlice from './get-data/get-data-slice';

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  matcher: isAnyOf(increment, decrement, incrementByAmount),
  effect: async (action, listenerApi) => {
    console.log(listenerApi.getOriginalState());
    console.log(action);
    await listenerApi.delay(5000);
    console.log(listenerApi.getState());
  },
});

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    global: globalSlice,
    data: getDataSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
