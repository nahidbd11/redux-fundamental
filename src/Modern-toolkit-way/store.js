import { configureStore } from "@reduxjs/toolkit";

// import actiontypeChecker from "./Middleware/actiontypeChecker";

import { checker } from "./Middleware/checker";
import { fetchMiddleWare } from "./Middleware/fetchapi";
import reducer from "./rootReducer";
const store = configureStore({
	reducer,
	middleware: (getDefaultMiddleware) => [
		...getDefaultMiddleware(), // 	...getDefaultMiddleware({serializableCheck: false}) for non serializable object in action.payload
		checker,
		fetchMiddleWare,
	], //we dont need actiontypeChecker middleware if the action is function or object
	//defaultmiddleware of redux will work for us
});
export default store;
