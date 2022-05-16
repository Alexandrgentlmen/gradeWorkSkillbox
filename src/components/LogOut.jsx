import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteToken, deleteUserProfile } from '../redux/actions';
import { LogOutBtn } from './styles';

export const LogOut = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	return (
		
			<LogOutBtn
				onClick={(e) => {
					e.preventDefault();
					localStorage.clear();
					dispatch(deleteToken());
					dispatch(deleteUserProfile());
					
					
					navigate('/', {replace: true});
				}}
			 	 className="sub-nav__link">
				 	LogOut
			</LogOutBtn>
		
	)
}
