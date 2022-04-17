import { createSlice } from "@reduxjs/toolkit";
let lastId = 0;
const initialState = [
	{
		id: ++lastId,
		moviename: "harry porter",
		watch: false,
	},
];

const movieSlice = createSlice({
	name: "movie",
	initialState,
	reducers: {
		addMovie: (state, action) => {
			state.push({
				id: ++lastId,
				moviename: action.payload.moviename,
				done: false,
			});
		},
	},
});

export const { addMovie } = movieSlice.actions;

export default movieSlice.reducer;
