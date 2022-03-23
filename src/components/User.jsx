import React from 'react'
// import { useSelector } from 'react-redux';

export const User = ({user}) => {

	if (user.id) {
		return (
			
				<a href="/" className="card__user">
					<img src={user.profile_image.medium} 
					heigth={30} width={30} 
					className="card__avatar" 
					alt="foto-author" />
				</a>
			
		)
	} else {
		return null
	}

}
