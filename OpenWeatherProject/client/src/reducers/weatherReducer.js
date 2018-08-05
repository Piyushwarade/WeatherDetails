const initialstate = {
	errmsg: ''
};
export default function weather(state = initialstate, action) {
	switch (action.type) {
	case 'WEATHER':
		return Object.assign({}, state, action.payload);
	default:
		return state;
	}
}