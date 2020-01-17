const listReducer = (state = {}, { type, payload }) => {
	switch (type) {
		case 'SET_TO_TABLE':
			return {
				...state,
				[payload.tableName]: {
					...state[payload.tableName],
					[payload.data.id]: payload.data
				}
			};
		default:
			return state;
	}
};

export default listReducer;
