import { combineReducers } from "redux";
import entitiesReducer from "./entitiesreducer";

const rootReducer = combineReducers({
	entities: entitiesReducer,
});

export default rootReducer;
