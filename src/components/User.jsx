import React from 'react'
export const User = ({user}) => {
	if (user.id) {
		return (		
				<a href="/" className="card__user">
					<img src={user.profile_image.medium} 
					heigth={50} width={50} 
					className="card__avatar card__avatar_square" 
					alt="foto-author" />
				</a>	
		)
	} else {
		return null
	}

}
