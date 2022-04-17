import todoreducer from "./todoreducer";
import moviereducer from "./moviereducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";
import fetchReducer from "./fetchReducer";
const entitiesReducer = combineReducers({
	todo: todoreducer,
	movie: moviereducer,
	user: userReducer,
	posts: fetchReducer,
});

export default entitiesReducer;
