import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;
const userSlice = createSlice({
	name: "user",
	initialState: [
		{
			id: ++lastId,
		},
	],
	reducers: {
		addUser: (state, action) => {
			state.push({
				id: ++lastId,
			});
		},
	},
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
