import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
import { imagesReducer } from './imagesReducer';
import { userReducer } from './userReducer';
import { modalReducer } from './modalReducer';


export const rootReducer = combineReducers({
	appReducer,
	imagesReducer,
	userReducer,
	modalReducer,
})