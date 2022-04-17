const islogged = false;
export const checker = (store) => (next) => (action) => {
	console.log("middleware working");
	// console.log(store.getState());
	return next(action);
};
