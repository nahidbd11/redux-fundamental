import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./actionCreator";
import store from "./store";
const initialState = {
	pending: true,
	data: [],
};
const fetchSlice = createSlice({
	name: "fetcher",
	initialState,
	reducers: {
		addPost: (state, action) => {
			state.data.push(...action.payload.data);
			state.pending = false;
		},
	},
});
export const { addPost } = fetchSlice.actions;
export default fetchSlice.reducer;

export const loadpost = () =>
	fetchData({
		url: "https://jsonplaceholder.typicode.com/posts",
		onSuccess: () => {
			console.log("successfully fetched data");
		},
	});
