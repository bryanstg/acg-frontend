const getState = ({ getStore, getActions, setStore }) => {
	const apiUri = process.env.API_URI || "";
	return {
		store: {},
		actions: {
			// Use getActions to call a function within a fuction
		}
	};
};

export default getState;
