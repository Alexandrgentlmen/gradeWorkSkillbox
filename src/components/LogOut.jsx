import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteToken, deleteUserProfile } from '../redux/actions';
import { LogOutBtn } from './styles';

export const LogOut = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	return (
		<li className="sub-nav__item sub-nav__item-btn">
			<LogOutBtn
				onClick={(e) => {
					e.preventDefault();
					dispatch(deleteUserProfile());
					dispatch(deleteToken());
					localStorage.clear();
					navigate('/', {replace: true});
				}}
			 	 className="sub-nav__link">
				 	LogOut
			</LogOutBtn>
		</li>
	)
}
