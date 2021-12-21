const UPLOAD_PHOTO = 'UPLOAD_PHOTO';


const rootReducer = (state = [], action) => {

	switch (action.type) {
		case UPLOAD_PHOTO:
			return [
				...state,
				{ id: 'add' + +new Date(), name: action.author, text: action.text, date: new Date().toLocaleString() }
			]


		default:
			return state;
	}
}

export default rootReducer;