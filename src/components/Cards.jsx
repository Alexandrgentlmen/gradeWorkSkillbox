import React from 'react';

import { Collect } from './Collect';
import { Download } from './Download';
import { Like } from './Like';




function Cards({name ,photoUser, url, id, totalLike, likeFromUser, links }) {

	// function checkoutToUser () {
	// 	window.open({links} , '_blank');
	// }
	return (
		
			<article className="card overlay">
				<div className="card__link d-flex">
					<img
					 className="card__img"
					 src={url}
					 key={id}
					 alt="gallery" />
				</div>
				<button onClick={()=>{window.open(links, '_blank')}} className="btn--reset card__photographer d-flex">
						<img
						 src={photoUser}
						 heigth={30}
						 width={30}
						 className="card__avatar"
						 alt="foto-author" />
					
					<span className="card__name">{name}</span>
				</button>
				<div className="card__info d-flex">
					<Download/>
					<Collect/>
					<Like
					 id={id}
					 totalLike={totalLike}
					 likeFromUser={likeFromUser}/>
				</div>
			</article>

		
	);
}

export default Cards;

