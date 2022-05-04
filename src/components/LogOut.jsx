import React from 'react'
import { useNavigate } from 'react-router-dom';
import { LogOutBtn } from './styles';

export const LogOut = () => {

	const navigate = useNavigate();

	return (
		<li className="sub-nav__item">
			<LogOutBtn
				onClick={(e) => {
					e.preventDefault();
					localStorage.clear();
					navigate('/', {replace: true});
				}}
			 	 className="sub-nav__link">
				 	LogOut
			</LogOutBtn>
		</li>
	)
}
