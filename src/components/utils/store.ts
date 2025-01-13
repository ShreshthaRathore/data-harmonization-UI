// import {
//     configureStore,
//     ThunkAction,
//     Action,
    
//   } from "@reduxjs/toolkit";
//   import reducers from "./redux/reducer.ts";
  
//   const store = configureStore({
//     reducer: {
//       reducer: reducers,
//     },
//     middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware({ serializableCheck: false }),
//   });
  
//   export type AppDispatch = typeof store.dispatch;
//   export type RootState = ReturnType<typeof store.getState>;
//   //export type RootState = ReturnType<typeof rootReducers>
  
//   export type AppThunk<ReturnType = void> = ThunkAction<
//     ReturnType,
//     RootState,
//     unknown,
//     Action<string>
//   >;
  
//   export default store;
// import { createStore, applyMiddleware } from 'redux';
// import { thunk } from 'redux-thunk'; // Correct import
// import { combineReducers } from 'redux';
// import fileUploadReducer from './redux/newexecution/fileUploadReducer.ts';

// // Combine reducers
// const rootReducer = combineReducers({
//   fileUpload: fileUploadReducer,
// });

// // Create the store with thunk middleware
// const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;

// import {
//   configureStore,
//   ThunkAction,
//   Action,
// } from "@reduxjs/toolkit";
// import reducers from "./redux/reducer.ts";
// import rootReducer from './redux/reducer.ts';
// export const store = configureStore({
//   reducer: {
//     reducer: reducers,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({ serializableCheck: false }),
// });

// export type AppDispatch = typeof store.dispatch;
// // export type RootState = ReturnType<typeof store.getState>;
// export type RootState = ReturnType<typeof rootReducer>;
// //export type RootState = ReturnType<typeof rootReducers>

// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;
// export default store;

import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import rootReducer from './redux/reducer.ts';  // Assuming this is your rootReducer file

// Configure the Redux store
export const store = configureStore({
  reducer: rootReducer,  // Use rootReducer directly
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),  // Disable serializable check if needed
});

// Type for dispatch (AppDispatch)
export type AppDispatch = typeof store.dispatch;

// Type for RootState (inferred from rootReducer)
export type RootState = ReturnType<typeof rootReducer>;

// Type for Thunk actions
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
