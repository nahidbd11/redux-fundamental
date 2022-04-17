import * as actions from "./actionTypes";

export const addTodo = (task) => ({
	type: actions.TODO_ADDED,
	payload: {
		task,
	},
});
export const isDone = (id, done) => ({
	type: actions.TODO_RESOLVED,
	payload: {
		id,
		done,
	},
});

export const removeTodo = (id) => ({
	type: actions.TODO_REMOVED,
	payload: {
		id,
	},
});
