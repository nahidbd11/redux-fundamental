import { bindActionCreators } from "redux";
import * as actions from "./actionTypes";
let lastId = 0;
const initialState = [
	{
		id: ++lastId,
		task: "this is first todo",
		done: true,
	},
];

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case actions.TODO_ADDED:
			return [
				...state,
				{
					id: ++lastId,
					task: payload.task,
					done: false,
				},
			];
		case actions.TODO_RESOLVED:
			return state.map((todo) =>
				payload.id === todo.id ? { ...todo, done: payload.done } : todo
			);
		case actions.TODO_REMOVED:
			return state.filter((todo) => todo.id != payload.id);
		default:
			return state;
	}
};
