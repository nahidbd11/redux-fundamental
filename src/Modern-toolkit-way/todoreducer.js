import { createSelector, createSlice } from "@reduxjs/toolkit";
let lastId = 0;
const initialState = [
	{
		id: ++lastId,
		task: "this is a first modern task",
		done: false,
	},
];
const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		todoUserAssigned: (state, action) => {
			const { todoId, userId } = action.payload;
			const index = state.findIndex((todo) => todo.id === todoId);
			state[index].userId = userId;
		},
		addTodo: (state, action) => {
			console.log("addtodo workingg");
			state.push({
				id: ++lastId,
				task: action.payload.task,
				done: false,
			});
		},
		removeTodo: (state, action) => {
			state = state.filter((item) => item.id !== action.payload.id);
		},
		isDone: (state, action) => {
			const index = state.findIndex((item) => item.id === action.payload.id);
			state[index].done = action.payload.done;
		},
	},
});

export const { addTodo, removeTodo, isDone, todoUserAssigned } =
	todoSlice.actions;
export default todoSlice.reducer;

//selector and memonization with createSelector
//TODO: memonization with createSelector from reselect package which is by default integrated with redux
export const getResolvedtodos = createSelector(
	(state) => state.entities.todo,
	(todo) => todo.filter((todo) => todo.done)
);

const todoSelect = (state) => state.entities.todo;
export const getTodoByuserId = (userId) =>
	createSelector(todoSelect, (todos) =>
		todos.filter((todo) => todo.userId === userId)
	);
