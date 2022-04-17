// import { compose } from "../node_modules/lodash/fp";
// let fn = (e) => e;
// let res = compose(fn);
// console.log(res("hello"));
// console.log(compose);

//TODO traditional way
/*
import { addTodo, isDone, removeTodo } from "./Traditional-way/actions";
import store from "./Traditional-way/store";

console.log(store);
store.dispatch(addTodo("this is a new task"));
store.dispatch(addTodo("this is a another task"));
store.dispatch(removeTodo(2));
store.dispatch(isDone(3, true));

console.log(store.getState());
*/

// TODO:modern way
import {
	addTodo,
	getResolvedtodos,
	getTodoByuser,
	getTodoByuserId,
	isDone,
	resolvedtodos,
	todoUserAssigned,
} from "./Modern-toolkit-way/todoreducer";
import store from "./Modern-toolkit-way/store";
import { addMovie } from "./Modern-toolkit-way/moviereducer";
import { addUser } from "./Modern-toolkit-way/userReducer";
import { configureStore, createSelector } from "@reduxjs/toolkit";
import { fetchData } from "./Modern-toolkit-way/actionCreator";
import { loadpost } from "./Modern-toolkit-way/fetchReducer";
// console.log(store.getState());

/*****store.dispatch((dispatch, getState) => {
	//dispacth takes action as object but we are giving a function as action
	//this is useful for calling api and when it resolved or reject then we will dispacth an action
	console.log("after checked by middleware", getState());
	dispatch(
		addTodo({ task: "this task has been added after checked by middleware" })
	);
	console.log("new state", getState());
});
*******/

store.dispatch(loadpost());
//to check async data we are logging after few sec
setTimeout(() => {
	console.log(store.getState().entities);
}, 3000);

store.dispatch(addTodo({ task: "new task added" }));

// store.dispatch(isDone({ id: 2, done: true }));
// store.dispatch(addMovie({ moviename: "life is beautiful" }));
// console.log(store.getState());
// store.dispatch(addTodo({ task: "new todo" }));
// store.dispatch(isDone({ id: 3, done: true }));
// console.log(store.getState());

// //find those todo whose done props is true
// const result1 = getResolvedtodos(store.getState());
// const result2 = getResolvedtodos(store.getState());

// console.log(result1 === result2); //this will return true because of memonization

// store.dispatch(todoUserAssigned({ todoId: 2, userId: 1 }));
// console.log(store.getState());

// store.dispatch(addUser());
// console.log(store.getState());
// const output = getTodoByuserId(2)(store.getState());

// console.log(output);

//TODO:check memonization with createSelector
/*****const inputfunc = (a, b) => a + b;
const outputfunc = (res) => {
	console.log("output func runnin");
	return res * 2;
};
const selector = createSelector(inputfunc, outputfunc);
console.log(selector(2, 3));
console.log(selector(2, 3));*******/ //sencond time the console of output func will not run because of same input and it's result has memonized
////////////////////////////////////////////////////
