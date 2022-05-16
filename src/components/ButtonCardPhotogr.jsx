import React from 'react'

export const ButtonCardPhotogr = ({links, name, photoUser}) => {
	const clickHandler = ()=>{window.open(links, '_blank')} ;
	return (
		<button className="btn--reset card__photographer d-flex" onClick={clickHandler}>
			<img
							src={photoUser}
							heigth={30}
							width={30}
							className="card__avatar"
							alt="foto-author" />	
			<span className="card__name">{name}</span>
		</button>
	)
}
