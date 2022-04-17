import { fetchData } from "../actionCreator";
import { addPost } from "../fetchReducer";

export const fetchMiddleWare =
	({ dispatch, getState }) =>
	(next) =>
	async (action) => {
		if (action.type != fetchData.type) return next(action);
		let res = await fetch(action.payload.url);
		let data = await res.json();
		action.payload.onSuccess();
		dispatch(addPost({ data }));
	};
