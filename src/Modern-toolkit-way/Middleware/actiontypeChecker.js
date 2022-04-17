//this is work like thunk midddleware
//if we use thunk middleware we don't need to make it from scratch
export default ({ dispatch, getState }) =>
	(next) =>
	(action) => {
		typeof action === "function" ? action(dispatch, getState) : next(action);
	};
